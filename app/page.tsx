import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import {Stack} from "@/components/Stack"
import {LogoAnimation} from "@/components/LogoAnimation"

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Portfolio />
    <Stack />
    <LogoAnimation />
    <Contact />
    </>
  );
}
