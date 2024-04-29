import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="text-white font-montserrat text-lg py-4">
        <ul className="flex flex-col md:flex-row md:justify-center sm:flex-col text-center space-y-4 md:space-y-0 md:space-x-24">
          <li>
            <Link href="/" className="hover:text-gray-800 hover:underline">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-800 hover:underline">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-gray-800 hover:underline">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-800 hover:underline">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-gradient-to-r via-white from-transparent to-transparent h-0.5"></div>
    </header>
  );
};

export default NavBar;
