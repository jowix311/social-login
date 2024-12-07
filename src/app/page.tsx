import {
  FacebookLogin,
  LineLogin,
  SignOut,
  SocialBlock,
  SocialButtons,
  TwitterLogin,
} from "@/components/feature/social";
import { Facebook, MessageCircle, Twitter } from "lucide-react";
import { auth } from "./auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="">
      <main className="">
        <section className="flex h-screen">
          <SocialBlock className="space-y-5">
            {!session ? (
              <>
                <h2 className="block">Sign in with</h2>
                <SocialButtons>
                  <FacebookLogin>
                    <Facebook />
                    Facebook
                  </FacebookLogin>
                  <TwitterLogin>
                    <Twitter />
                    Twitter
                  </TwitterLogin>
                  <LineLogin>
                    <MessageCircle /> Line
                  </LineLogin>
                </SocialButtons>
              </>
            ) : (
              <>
                <h2>Logged in as {session?.user?.name}</h2>
                <SignOut>Sign out</SignOut>
              </>
            )}
          </SocialBlock>
        </section>
      </main>
    </div>
  );
}
