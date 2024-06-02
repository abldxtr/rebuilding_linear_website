import Animate from "@/components/animation";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Animate/>
      <Footer />
    </main>
  );
}
