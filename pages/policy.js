// Imports Used
import Script from "next/script"
import Link from 'next/link';
import Navbar from "../Components/FrontPage/Navbar";
import PolicyHeader from "../Components/FrontPage/PolicyHeader";
import Analytics from "../Components/FrontPage/Analytics";
import Newsletter from "../Components/FrontPage/Newsletter";
import Cards from "../Components/FrontPage/Cards";
import Footer from "../Components/FrontPage/Footer";
import PolicyContent from "../Components/FrontPage/PolicyContent";
import SecondCar from "../Components/FrontPage/SecondCar";
import ThirdCar from "../Components/FrontPage/ThirdCar";
import FourthCar from "../Components/FrontPage/FourthCar";
import SpecialCar from "../Components/FrontPage/SpecialCar";

// Home function
export default function Policy() {

  return (
    <div className="bg-black">
      <Navbar />
      <PolicyHeader />
      <PolicyContent />
      <Footer />
    </div>
  );
}