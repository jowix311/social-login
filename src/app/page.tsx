import {
  FacebookLogin,
  SignOut,
  SocialBlock,
} from "@/components/feature/social";
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
                <h2>Sign in with</h2>
                <FacebookLogin>Facebook</FacebookLogin>
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
