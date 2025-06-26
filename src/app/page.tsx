"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Description from "@/components/main/Description";
import AcademicOffer from "@/components/main/AcademicOffer";
import News from "@/components/main/News";
import Events from "@/components/main/Events";
import Thoughts from "@/components/main/Thoughts";
import SignLink from "@/components/main/SignLink";
import Image from "next/image";

import PageReveal from "@/components/page-reveal";
import Header from "@/components/main/Header";


export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const firstWord = 'Impulsando sueños, ';
  const titlePortait = "creando oportunidades";

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

      {/* News, Events, Thoughts */}
      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1800"
      >
        <News />
      </div>
      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="1500"
      >
        <Events />
        <Thoughts />
      </div>
    </div>
  );
}
