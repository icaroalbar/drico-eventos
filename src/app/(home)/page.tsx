import About from "@/partials/About";
import Actions from "@/partials/Actions";
import Header from "@/partials/Header";
import Partners from "@/partials/Partners";
import Cases from "@/partials/Cases";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Actions />
      <Partners />
      <Cases />
    </main>
  );
}
