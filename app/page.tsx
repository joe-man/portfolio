import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header></Header>
      <Introduction></Introduction>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}
