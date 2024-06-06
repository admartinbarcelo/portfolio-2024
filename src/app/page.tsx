import { FloatingNav } from "@/components/layout/FloatingNavbar";
import { Footer } from "@/components/sections/Footer";
import { Grid } from "@/components/sections/Grid";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
