"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AcademicOffer from "@/components/main/AcademicOffer";
import News from "@/components/main/News";
import Events from "@/components/main/Events";
import Thoughts from "@/components/main/Thoughts";
import SignLink from "@/components/main/SignLink";


export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative">
      {/* Main Sections */}
      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-5"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
      {/* <Description /> */}
        <AcademicOffer />
      </div>
      {/* Call to Action */}
      <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1200">
        <SignLink />
      </div>
      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="1500"
      >
        <Thoughts />
      </div>
    </div>
  );
}
