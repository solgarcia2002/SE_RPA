import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowedEmails = ["rbkheredia90@gmail.com", "empowerit.io@gmail.com"];

const handler = NextAuth({
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
          user: undefined, // Prevent unauthorized users from getting a session
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
});

// ✅ Use a default export for Next.js App Router
export { handler as GET, handler as POST };
