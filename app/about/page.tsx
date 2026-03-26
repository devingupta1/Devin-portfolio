import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Devin Gupta — CS junior at the University of Utah. Distributed systems, agentic AI, and full-stack engineering.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24" id="about-page">
      <About />
    </div>
  );
}
