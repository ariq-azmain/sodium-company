// src/app/api/users/route.js
import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/lib/models/User";
import { NextResponse } from "next/server";
import { z } from "zod";
import jwt from "jsonwebtoken";

// Zod schema for user creation
const userSchema = z.object({
   email: z.string().email("Invalid email address"),
   username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username too long"),
   firstName: z.string().max(50).optional(),
   lastName: z.string().max(50).optional(),
   password: z.string().min(6, "Password must be at least 6 characters")
});

// GET: Fetch all users (public)
export async function GET() {
   try {
      await dbConnect();
      const users = await User.find({})
         .select("-password")
         .sort({ createdAt: -1 });
      return NextResponse.json({ success: true, data: users });
   } catch (error) {
      console.error("Error fetching users:", error);
      return NextResponse.json(
         { success: false, error: "Internal server error" },
         { status: 500 }
      );
   }
}

// POST: Create a new user (email must be verified first)
export async function POST(request) {
   try {
      // 1. Check verification_token cookie
      const verificationToken = request.cookies.get("verification_token")?.value;
      if (!verificationToken) {
         return NextResponse.json(
            { success: false, error: "Email not verified" },
            { status: 401 }
         );
      }

      // 2. Verify the token
      let verifiedEmail;
      try {
         const decoded = jwt.verify(verificationToken, process.env.JWT_SECRET);
         verifiedEmail = decoded.email;
      } catch (error) {
         return NextResponse.json(
            { success: false, error: "Verification expired or invalid" },
            { status: 401 }
         );
      }

      // 3. Parse and validate request body
      const body = await request.json();
      const validation = userSchema.safeParse(body);
      if (!validation.success) {
         return NextResponse.json(
            { success: false, errors: validation.error.errors },
            { status: 400 }
         );
      }

      // 4. Ensure email matches the verified one
      if (body.email !== verifiedEmail) {
         return NextResponse.json(
            { success: false, error: "Email mismatch" },
            { status: 400 }
         );
      }

      await dbConnect();

      // 5. Check if user already exists
      const existingUser = await User.findOne({ email: body.email });
      if (existingUser) {
         return NextResponse.json(
            { success: false, error: "Email already registered" },
            { status: 409 }
         );
      }

      // 6. Create user (password will be hashed by pre-save hook)
      const newUser = await User.create({
         email: body.email,
         username: body.username,
         firstName: body.firstName || "",
         lastName: body.lastName || "",
         password: body.password
      });

      // 7. Remove password from response
      const userData = newUser.toObject();
      delete userData.password;

      // 8. Clear verification_token cookie (one-time use)
      const response = NextResponse.json(
         { success: true, data: userData },
         { status: 201 }
      );
      response.cookies.set("verification_token", "", { maxAge: 0 });

      // 9. Optionally auto-login by setting token cookie
      const loginToken = jwt.sign(
         { userId: newUser._id, email: newUser.email },
         process.env.JWT_SECRET,
         { expiresIn: "7d" }
      );
      response.cookies.set("token", loginToken, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: "strict",
         maxAge: 7 * 24 * 60 * 60 // 7 days
      });

      return response;
   } catch (error) {
      console.error("User creation error:", error);
      return NextResponse.json(
         { success: false, error: "Internal server error" },
         { status: 500 }
      );
   }
}
