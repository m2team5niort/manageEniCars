// Imports Used
import Script from "next/script"
import Link from 'next/link';
import Navbar from "../Components/FrontPage/Navbar";
import CarHeader from "../Components/FrontPage/CarHeader";
import Analytics from "../Components/FrontPage/Analytics";
import Newsletter from "../Components/FrontPage/Newsletter";
import Cards from "../Components/FrontPage/Cards";
import Footer from "../Components/FrontPage/Footer";
import FirstCar from "../Components/FrontPage/FirstCar";
import SecondCar from "../Components/FrontPage/SecondCar";
import ThirdCar from "../Components/FrontPage/ThirdCar";
import FourthCar from "../Components/FrontPage/FourthCar";
import SpecialCar from "../Components/FrontPage/SpecialCar";

// Home function
export default function Home() {

  return (
    <div className="bg-black">
      <Navbar />
      <CarHeader />
      <FirstCar />
      <SecondCar />
      <ThirdCar />
      <FourthCar />
      <SpecialCar />
      <Footer />
    </div>
  );
}