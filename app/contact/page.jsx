import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <main className="relative min-h-screen p-10 bg-gradient-to-r from-slate-600 to-slate-800">
      <NavBar />
      <h1 className="text-center font-montserrat font-normal text-white text-lg md:text-3xl my-8 animate-fade-up animate-once animate-duration-[1500ms]">
        MY CONTACT INFO
      </h1>
      <div className="grid grid-cols-12 gap-3 md:mx-20 h-[50rem] md:h-[34rem] md:my-20 animate-fade-up animate-once animate-duration-[1500ms]">
        <div className="col-span-12 md:col-span-6">
          <div className="flex my-2 text-sm md:text-lg">
            <h2 className="font-montserrat font-normal text-white">
              Address :
            </h2>
            &nbsp;&nbsp;&nbsp;
            <p className="font-montserrat text-slate-300">
              Saddar, Peshawar Cantt, Pakistan
            </p>
          </div>
          <div className="flex my-2 text-sm md:text-lg">
            <h2 className="font-montserrat font-normal text-white">Email :</h2>
            &nbsp;&nbsp;&nbsp;
            <p className="font-montserrat text-slate-300">
              harishummambaluch@gmail.com
            </p>
          </div>
          <div className="flex my-2 text-sm md:text-lg">
            <h2 className="font-montserrat font-normal text-white">
              Contact No :
            </h2>
            &nbsp;&nbsp;&nbsp;
            <p className="font-montserrat text-slate-300">+92 319 7424892</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="px-4 mx-auto max-w-screen-md">
            <h2 className="mb-6 text-2xl font-montserrat tracking-tight font-normal text-center text-white">
              Send me a message
            </h2>
            <form action="#" className="space-y-8">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-white font-montserrat"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block p-2.5 font-montserrat w-full text-sm  rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-white font-montserrat"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-2.5 font-montserrat w-full text-sm  rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-white font-montserrat"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 font-montserrat w-full text-sm  rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-montserrat font-medium text-center text-white rounded-lg border-[2px] border-solid border-slate-500 hover:bg-slate-500"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
