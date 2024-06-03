// Home.js
import React from "react";
import { Link } from "react-router-dom";
import Card from "../pages/Card";
import hairimage from "../images/hair.jpg";
import girlimage from "../images/girl.jpg";
import dress from "../images/dress.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const cardsData = [
    {
      id: 1,
      image: hairimage,
      heading: "Chic Hairstyles for Every Occasion: Transform Your Look Today!",
      description: "Discover a variety of stunning hairstyles...",
    },
    {
      id: 2,
      image: girlimage,
      heading: "Elegant in Every Way: The Timeless Charm of Frock Dresses",
      description: "The timeless appeal of frock dresses...",
    },
    {
      id: 3,
      image: dress,
      heading:
        "Embracing the Timeless Charm of Gingham: The Perfect Peplum Top",
      description: "In the ever-evolving world of fashion...",
    },
    {
      id: 4,
      image: girlimage,
      heading: "Elegant in Every Way: The Timeless Charm of Frock Dresses",
      description: "There's something undeniably charming...",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="pt-24">
        <section className="name flex items-center justify-center  border-t border-b border-black h-24">
          <h1 className="text-6xl font-semibold">THE BLOG</h1>
        </section>
      </div>

      <section className="main mx-10">
        <div className="main flex flex-wrap justify-center gap-6 px-10 py-10">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              id={card.id}
              image={card.image}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
