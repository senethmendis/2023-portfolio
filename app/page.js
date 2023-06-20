import { Expertires } from "@/components/Expertires";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Interests } from "@/components/Interests";
import { Projects } from "@/components/Projects";
import { Tech } from "@/components/Tech";


export default function Home() {
  return (
    <main className="flex max-w-[1240px] h-full flex-col items-center justify-between mx-auto">
      <Hero/>
      <Expertires/>
      <Projects/>
      <Tech/>
      <Interests/>
      <Footer/>
    </main>
  );
}
