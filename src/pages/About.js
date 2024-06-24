import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <section className="name flex items-center justify-center  border-b border-black h-32">
          <h1 className="text-5xl font-semibold">ABOUT</h1>
        </section>
      </div>
      <Footer />
    </div>
  );
}
