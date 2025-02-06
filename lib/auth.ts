// lib/auth.ts
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

const allowedEmails = ["rbkheredia90@gmail.com", "empowerit.io@gmail.com"];

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (!token.email || !allowedEmails.includes(token.email)) {
        return {
          ...session,
          user: undefined,
        };
      }

      return {
        ...session,
        user: {
          email: token.email,
          name: session.user?.name || null,
          image: session.user?.image || null,
        },
      };
    },
    async signIn({ account, profile }) {
      if (account?.provider === "google" && profile?.email) {
        return (
          profile.email_verified &&
          (profile.email.endsWith("@servientrega.us") ||
            allowedEmails.includes(profile.email))
        );
      }
      return false;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
