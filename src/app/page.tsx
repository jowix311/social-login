import { FacebookLogin, SocialBlock } from "@/components/feature/social";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <section className="flex h-screen">
            <SocialBlock className="space-y-5">
              <h2>Sign in with</h2>
                <FacebookLogin>Facebook</FacebookLogin>
            </SocialBlock>
        </section>
       </main>
    </div>
  );
}
