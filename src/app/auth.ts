import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Line from "next-auth/providers/line";
import Twitter from "next-auth/providers/twitter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Facebook,
    Twitter,
    Line({
      clientId: process.env.AUTH_LINE_ID,
      clientSecret: process.env.AUTH_LINE_SECRET,
      checks: ["state"],
    }),
  ],
});
