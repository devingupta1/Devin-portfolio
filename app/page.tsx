import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Projects section */}
      <section className="py-24" id="featured-projects">
        <div className="mx-auto max-w-6xl px-6">
          <ProjectGrid />
        </div>
      </section>

      {/* About section */}
      <About />
    </>
  );
}
