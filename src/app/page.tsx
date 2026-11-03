import {
  About,
  Contact,
  Hero,
  Method,
  Plans,
  Projects,
  Services,
} from "@/components/screens/home";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Services />
      <Plans />
      <Projects />
      <Method />
      <About />
      <Contact />
    </main>
  );
}
