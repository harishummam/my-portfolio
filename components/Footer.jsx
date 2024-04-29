"use client";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="block text-center font-montserrat text-white">
      <p>
        &copy; Copyright <span className="font-bold animate-pulse">Haris Hummam</span>. All
        Rights Reserved
      </p>
      <div className="flex justify-center items-center space-x-2 m-3">
        <Link href="https://www.facebook.com/profile.php?id=100005285476593" className="hover:text-gray-800">
          <FaFacebookSquare size={30} />
        </Link>
        <Link href="https://twitter.com/HarisHummam1" className="hover:text-gray-800">
          <FaTwitterSquare size={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/haris-hummam-a404621ba/" className="hover:text-gray-800">
          <FaLinkedin size={30} />
        </Link>
        <Link href="#" className="hover:text-gray-800">
          <FaInstagramSquare size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
