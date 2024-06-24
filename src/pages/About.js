import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image from "../images/image.webp";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <section className="name flex items-center justify-center  border-b border-black h-32">
          <h1 className="text-5xl font-semibold">ABOUT</h1>
        </section>
        <div className="border border-black  mx-28 my-20 flex-row flex">
          <div className="w-1/2">
            <img src={image} alt="about" className="border border-black" />
          </div>
          <div className="w-1/2 px-20 py-2">
            <h1 className="text-2xl font-semibold py-5">
              Noor Zafar Khan: A Rising Star in the Pakistani Entertainment
              Industry
            </h1>
            <p>
              Noor Zafar Khan, a rising star in the Pakistani entertainment
              industry, has captivated audiences with her charming presence and
              versatile acting skills. Born on August 8, 1995, in Medina, Saudi
              Arabia, Noor moved to Pakistan with her family at a young age,
              where she began her journey into the world of showbiz. She is the
              younger sister of renowned actress Sarah Khan, and together, they
              have made significant marks in the industry. Noor's career took
              off with her debut in the drama "Preet Na Kariyo Koi," where her
              natural talent shone through, earning her critical acclaim and a
              loyal fan base. Her performances in popular dramas such as
              "Gustakh Ishq" and "Tou Dil Ka Kya Hua" further solidified her
              reputation as a promising actress. Noor is known for her ability
              to portray a wide range of characters with depth and authenticity,
              making her a favorite among directors and viewers alike. In
              addition to her acting prowess, she is admired for her beauty and
              grace, often becoming the face of various fashion brands and
              magazines. Despite her growing fame, Noor remains grounded and
              dedicated to her craft.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
