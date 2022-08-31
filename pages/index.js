// Imports Used
import Script from "next/script"
import Link from 'next/link';
import Navbar from "../Components/FrontPage/Navbar";
import Hero from "../Components/FrontPage/Hero";
import Analytics from "../Components/FrontPage/Analytics";
import Newsletter from "../Components/FrontPage/Newsletter";
import Cards from "../Components/FrontPage/Cards";
import Footer from "../Components/FrontPage/Footer";

// Home function
export default function Home() {

  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}