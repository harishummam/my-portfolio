import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import leaderboard_1 from "../../public/images/leaderboard/leaderboard_1.jpeg";
import Image from "next/image";

const leaderboards = [];

for (let i = 1; i <= 10; i++) {
  leaderboards.push({
    src: `/images/leaderboard/leaderboard_${i}.jpeg`,
    alt: `Leaderboard ${i}`,
  });
}

const Page = () => {
  return (
    <main className="relative min-h-screen p-10 bg-gradient-to-r from-slate-600 to-slate-800">
      <NavBar />
      <h1 className="text-center font-montserrat font-normal text-white text-3xl my-8 animate-fade-up animate-once animate-duration-[1500ms]">
        RECENT PROJECTS
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-20">
        <div>
          <div className="carousel carousel-center max-w-x p-4 space-x-6 bg-slate-900 rounded-box animate-fade-up animate-once animate-duration-[1500ms]">
            {leaderboards.map((leaderboard) => (
              <div className="carousel-item">
                <img src={leaderboard.src} className="rounded-box h-[24rem]" />
              </div>
            ))}
          </div>
          <div className="my-2 border-[2px] border-solid border-slate-500 rounded-box p-4 animate-flip-up animate-once animate-duration-[1500ms] animate-ease-linear">
            <h1 className="font-montserrat text-white text-center">
              Leaderboard
            </h1>
            <p className="font-montserrat mt-2">
              A dynamic website with full CRUD operations and a secure
              authentication system developed for overseeing developer profiles,
              and fostering efficient connections between companies and
              developers for seamless collaboration
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
