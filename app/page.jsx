import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import haris from "../public/images/haris.jpg";
import doodle from "../public/images/doodle.png";

export default function Home() {
  return (
    <main className="relative min-h-screen p-10 bg-gradient-to-r from-slate-600 to-slate-800">
      <NavBar />
      <div className="flex items-center justify-center min-h-[38rem] mt-2 mb-24">
        <div>
          <Image
            src={doodle}
            className="block contrast-150 opacity-65 w-[1000px]"
          />
          <div className="flex justify-center text-center text-white font-montserrat animate-fade-up animate-once animate-duration-[1500ms]">
            <div className="">
              <div className="flex items-center justify-center mb-[8rem]">
                <Image
                  src={haris}
                  width={180}
                  className="absolute rounded-full shadow-2xl border-gray-800 border-[8px] mt-5"
                />
              </div>
              <h1 className="text-center text-4xl mb-4 drop-shadow-2xl-shadow-md font-normal">
                HARIS HUMMAM
              </h1>
              <p className="text-center text-lg max-w-xl">
                A Passionate Full Stack Developer skilled in crafting innovative
                web solutions from concept to deployment. Constantly learning
                and collaborating to build impactful projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
