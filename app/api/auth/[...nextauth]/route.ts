import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowedEmails = ["rbkheredia90@gmail.com", "empowerit.io@gmail.com"];

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (!token || !allowedEmails.includes(token.email || "")) {
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
      if (account && account.provider === "google" && profile && profile.email) {
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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
