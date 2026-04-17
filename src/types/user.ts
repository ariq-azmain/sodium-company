export type UserStatus = "pending" | "accept" | "reject";

export type User = {
   _id: string;
   email: string;
   username: string;
   firstName: string;
   lastName: string;
   status: UserStatus;
   createdAt: string;
};
