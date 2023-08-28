import NextAuth from "next-auth";
import { connectToDB } from "@utils/database";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

  async session({ session }) {

  },

  async signIn({ profile }) {
    try {
      await connectToDB();

      return true;
    } catch (error) {
      return false;
    }
  },
})

export { handler as GET, handler as POST };
