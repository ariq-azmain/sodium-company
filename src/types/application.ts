export type ApplicationRole =
   | "Video Editor"
   | "Graphics Designer"
   | "Development IT"
   | "Competitive IT"
   | "Gaming"
   | "Media"
   | "Narrator"
   | "Researcher & Script Writer";

export type Application = {
   _id: string;
   userId: string;
   roles: ApplicationRole[];
   motivation: string;
   experience: string;
   availability: string;
   portfolio?: string;
   status: "pending" | "approved" | "rejected";
   createdAt: string;
};
