import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import haris from "../public/images/haris.jpg";
import doodle from "../public/images/doodle.png";

export default function Home() {
  return (
    <main className="relative min-h-screen p-10 bg-gradient-to-r from-slate-600 to-slate-800">
      <NavBar />
      <div className="flex items-center justify-center min-h-[38rem] mt-14">
        <div className="absolute top-[8rem] contrast-150 opacity-65">
          <Image src={doodle} width={1000}/>
        </div>
        <div class="text-center text-white font-montserrat animate-fade-up animate-once animate-duration-[1500ms]">
          <div className="flex items-center justify-center mb-4">
            <Image
              src={haris}
              width={180}
              className="rounded-full shadow-2xl border-gray-800 border-[8px] mt-5"
            />
          </div>
          <h1 class="text-4xl mb-4 drop-shadow-2xl-shadow-md font-normal">HARIS HUMMAM</h1>
          <p class="text-lg max-w-xl">
            A Passionate Full Stack Developer skilled in crafting innovative web
            solutions from concept to deployment. Constantly learning and
            collaborating to build impactful projects.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
