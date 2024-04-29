import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haris Hummam",
  description: "A Passionate Full Stack Developer skilled in crafting innovative web solutions from concept to deployment. Constantly learning and collaborating to build impactful projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
