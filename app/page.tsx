import Animate from "@/components/animation";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Workflow from "@/components/workflow";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Workflow />
      <Footer />
    </main>
  );
}
