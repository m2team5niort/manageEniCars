// Imports Used
import Script from "next/script"
import Link from 'next/link';
import Navbar from "../Components/FrontPage/Navbar";
import TravelHeader from "../Components/FrontPage/TravelHeader";
import Footer from "../Components/FrontPage/Footer";
import FirstTravel from "../Components/FrontPage/FirstTravel";
import SecondTravel from "../Components/FrontPage/SecondTravel";
import EnvironmentTravel from "../Components/FrontPage/EnvironmentTravel";

// Home function
export default function Home() {

  return (
    <div className="bg-black">
      <Navbar />
      <TravelHeader />
      <FirstTravel />
      <SecondTravel />
      <EnvironmentTravel />
      <Footer />
    </div>
  );
}