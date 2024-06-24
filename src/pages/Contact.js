import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <section className="name flex items-center justify-center  border-b border-black h-32">
          <h1 className="text-5xl font-semibold">CONTACT</h1>
        </section>
        <section className="main mx-10 px-44">
          <h2 className="text-4xl text-center p-2 text-wrap mt-12">
            FOR INQUIRIES AND COLLABORATIONS, REACH ME HERE
          </h2>
          <form className="flex flex-col items-center justify-center mt-12 mb-12">
            <input
              type="text"
              placeholder="Name"
              className="w-96 py-2 border border-black"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-96 py-2 mt-4 border border-black"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-96 py-2 mt-4 border border-black"
            />
            <textarea
              placeholder="Message"
              className="w-96 py-2 mt-4 border border-black"
            />
            <button className="text-white bg-black w-56 py-2 mt-4 border border-black">
              Submit
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}
