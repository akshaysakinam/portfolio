"use client";

import { Carousel } from "./Carousel";

export default function Certifications() {
  const certSlides = [
    {
      title: "Full Stack Web Development",
      issuer: "100xDevs",
      year: "2024",
      image:
        "https://i.postimg.cc/gJcPvfpQ/certificate.png",
      link: "https://drive.google.com/file/d/1N9T3g92tvyMg-eYtLEVjxMdkXfnWVPlC/view?usp=drive_link",
    },
    {
      title: "Introduction to Java",
      issuer: "Learn Quest (Coursera)",
      year: "2023",
      image:
        "https://i.postimg.cc/RZxy7jQd/intro-to-java.png",
      link: "https://drive.google.com/file/d/1lFfCSu39RFLCcEAA7E1QJoim_kx4gNud/view?usp=drive_link",
    },
  ];

  const slideData = certSlides.map((cert) => ({
    title: cert.title,
    issuer: cert.issuer,
    year: cert.year,
    link: cert.link,
    button: "View PDF",
    src: cert.image,
  }));

  return (
    <section
      id="certifications"
      className="min-h-screen py-24 px-4 text-center relative bg-white dark:bg-black"
    >
      <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">
        Certifications
      </h2>
      <Carousel slides={slideData} />
    </section>
  );
}
