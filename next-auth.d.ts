import NextAuth from "next-auth";

declare module "next-auth" {
  interface Profile {
    email: string;
    email_verified: string;
  }
}