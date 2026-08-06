import {
  About,
  Contact,
  Hero,
  Method,
  Projects,
  Services,
} from "@/components/screens/home";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Services />
      <Projects />
      <Method />
      <About />
      <Contact />
    </main>
  );
}
