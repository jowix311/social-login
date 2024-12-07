import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Twitter from "next-auth/providers/twitter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Facebook, Twitter],
});
