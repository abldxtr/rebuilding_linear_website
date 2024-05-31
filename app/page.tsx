import Features from "@/components/features";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
