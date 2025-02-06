// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Profile {
    email: string;
    email_verified: boolean; // ✅ Correct data type
  }

  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
