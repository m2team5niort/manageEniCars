// Imports Used
import Script from "next/script"
import Link from 'next/link';
import Navbar from "../Components/FrontPage/Navbar";
import ContactHeader from "../Components/FrontPage/ContactHeader";
import Footer from "../Components/FrontPage/Footer";
import ContactBody from "../Components/FrontPage/ContactBody";

// Home function
export default function Home() {

  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactBody />
      <Footer />
    </div>
  );
}