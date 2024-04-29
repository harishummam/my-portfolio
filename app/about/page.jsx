import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import haris2 from "@/public/images/haris2.jpg";
import { FaDotCircle } from "react-icons/fa";

const Page = () => {
  return (
    <main className="relative min-h-screen p-10 bg-gradient-to-r from-slate-600 to-slate-800">
      <NavBar />
      <div className=" animate-fade-up animate-once animate-duration-[1500ms]">
        <h1 className="text-center font-montserrat font-normal text-white text-lg lg:text-3xl my-8">
          ABOUT
        </h1>
        <p className="text-center font-montserrat font-normal text-white text-sm lg:text-lg my-8 mx-8">
          I am a Full Stack Developer adept in all stages of advanced web
          development. Knowledgeable in user interface, testing, and debugging
          processes. Equipped with a diverse and promising skill set. Able to
          effectively self-manage during independent projects, as well as
          collaborate in a team setting.
        </p>
        <div className="mt-10 mb-24 mx-10 min-h-[30rem]">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4 w-[240px] lg:w-full">
              <Image src={haris2} />
            </div>
            <div className="col-span-12 lg:col-span-8 w-[230px] lg:w-full">
              <h3 className="font-montserrat font-normal text-white text-md lg:text-xl">
                SKILLS
              </h3>
              <div className="grid grid-cols-12 mt-4">
                <div className="col-span-12 lg:col-span-6">
                  <h3 className="font-montserrat font-medium text-white text-sm lg:text-lg">
                    Programming Languages
                  </h3>
                  <ul className="text-white font-light text-sm lg:text-md">
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>C++</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>Java</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>JavaScript</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>PHP</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 mt-3 lg:mt-0 lg:col-span-6">
                  <h3 className="font-montserrat font-medium text-white text-sm lg:text-lg">
                    Development Technologies
                  </h3>
                  <ul className="text-white font-light text-sm lg:text-md">
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>React</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>NodeJS</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>Express</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>Laravel</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-12 mt-4">
                <div className="col-span-12 lg:col-span-6">
                  <h3 className="font-montserrat font-medium text-white text-sm lg:text-lg">
                    Frontend Design
                  </h3>
                  <ul className="text-white font-light text-sm lg:text-md">
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>Bootstrap</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>Tailwind CSS</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 mt-3 lg:mt-0 lg:col-span-6">
                  <h3 className="font-montserrat font-medium text-white text-sm lg:text-lg">
                    Database Operations
                  </h3>
                  <ul className="text-white font-light text-sm lg:text-md">
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>SQL (MySQL)</p>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <FaDotCircle className="text-[10px]" />
                        &nbsp;
                        <p>NoSQL (MongoDB)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-gradient-to-r via-white from-transparent to-transparent h-[1px] mt-4 w-[230px] lg:w-full"></div>
              <h3 className="font-montserrat font-normal text-white text-md lg:text-xl mt-5">
                EXPERIENCE
              </h3>
              <ul className="text-white font-light text-md mt-4 w-[230px] lg:w-full">
                <li>
                  <div class="=flex-row">
                    <div className="flex items-center">
                      <FaDotCircle className="text-[10px]" />
                      &nbsp;&nbsp;
                      <p className="font-montserrat font-normal text-white text-md lg:text-lg">
                        LOGIXOS | MERN Stack Developer (Remote)
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaDotCircle className="text-[10px] invisible" />
                      &nbsp;&nbsp;
                      <p className="font-montserrat font-normal text-white text-sm lg:text-md">
                        6 Months, 07/2023 - 12/2023
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaDotCircle className="text-[10px] invisible" />
                      &nbsp;&nbsp;
                      <p className="font-montserrat font-normal text-white text-md">
                        Islamabad, Panjab (Pakistan)
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="bg-gradient-to-r via-white from-transparent to-transparent h-[1px] mt-4 w-[230px] lg:w-full"></div>
              <h3 className="font-montserrat font-normal text-white text-xl mt-5">
                EDUCATION
              </h3>
              <ul className="text-white font-light text-md mt-4 w-[230px] lg:w-full">
                <li>
                  <div class="=flex-row">
                    <div className="flex items-center">
                      <FaDotCircle className="text-[10px]" />
                      &nbsp;&nbsp;
                      <p className="font-montserrat font-normal text-white text-md lg:text-lg">
                        Institute of Management Sciences | Peshawar, KPK
                        (Pakistan)
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaDotCircle className="text-[10px] invisible" />
                      &nbsp;&nbsp;
                      <p className="font-montserrat font-normal text-white text-sm lg:text-md">
                        BS Software Engineering | 06/2024
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-2">
                  <div class="=flex-row">
                    <div className="flex items-center">
                      <FaDotCircle className="text-[10px]" />
                      &nbsp;&nbsp;
                      <p className="font-montserrat font-normal text-white text-md lg:text-lg">
                        Sir Syed College Mall Road | Rawalpindi, Panjab
                        (Pakistan)
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaDotCircle className="text-[10px] invisible" />
                      &nbsp;&nbsp;
                      <p className="font-montserrat font-normal text-white text-sm lg:text-md">
                        HSSC | 05/2020
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-2">
                  <div class="=flex-row">
                    <div className="flex items-center">
                      <FaDotCircle className="text-[10px]" />
                      &nbsp;&nbsp;
                      <p className="font-montserrat font-normal text-white text-md lg:text-lg">
                        Army Public School and College (FWO) | Rawalpindi,
                        Panjab (Pakistan)
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaDotCircle className="text-[10px] invisible" />
                      &nbsp;&nbsp;
                      <p className="font-montserrat font-normal text-white text-sm lg:text-md">
                        SSC | 04/2018
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              {/* <div class="bg-gradient-to-r via-white from-transparent to-transparent h-[1px] mt-4"></div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
