import Card from "./Card";
import React from "react";
import hairimage from "../images/hair.jpg";
import girlimage from "../images/girl.jpg";
import dress from "../images/dress.jpg";
const Home = () => {
  const cardsData = [
    {
      image: hairimage,
      heading: "Chic Hairstyles for Every Occasion: Transform Your Look Today!",
      description:
        "Whether you're preparing for a special event or simply want to add a touch of glamour to your daily look, we've got you covered. Discover a variety of stunning hairstyles that are perfect for girls looking to showcase their unique style and personality. From elegant updos to playful braids, there's a hairstyle for every mood and occasion. Embrace your inner fashionista and experiment with different textures, lengths, and accessories to create a look that is uniquely yours. Our step-by-step guides and expert tips will help you achieve salon-worthy results from the comfort of your own home. Say goodbye to bad hair days and hello to fabulous hair that turns heads wherever you go. Get inspired and unleash your creativity with these gorgeous hairstyles. It's time to make a statement with your hair!",
    },
    {
      image: girlimage,
      heading: "Elegant in Every Way: The Timeless Charm of Frock Dresses",
      description:
        "There's something undeniably charming about a girl dressed in a frock. The timeless appeal of frock dresses transcends generations, making them a staple in every girl's wardrobe. From playful floral prints to sophisticated silhouettes, frock dresses offer a versatility that is unmatched. Whether you're attending a casual outing or a formal event, frock dresses can be styled to suit any occasion. Pair a floral frock with sandals for a day out in the sun, or dress it up with heels and accessories for a night on the town. The options are endless, and the result is always stunning. One of the best things about frock dresses is their ability to make you feel effortlessly beautiful. The way the fabric sways with every movement and the way the silhouette accentuates your figure is truly magical. It's no wonder that frock dresses have remained a fashion favorite for decades. So, the next time you're looking for an outfit that exudes charm and elegance, consider slipping into a frock dress. Embrace your femininity and let your style shine bright in a frock that is as unique and beautiful as you are.",
    },
    {
      image: dress,
      heading:
        "Embracing the Timeless Charm of Gingham: The Perfect Peplum Top",
      description:
        "In the ever-evolving world of fashion, certain patterns and styles never go out of style. One such timeless pattern is gingham, and when combined with the flattering silhouette of a peplum top, it creates a look that is both classic and contemporary. The gingham peplum top, as seen in the image, effortlessly captures this essence, making it a must-have addition to any wardrobe. The Allure of Gingham Gingham, with its distinctive checkered pattern, has been a fashion favorite for decades. Its simple yet striking design makes it versatile, suitable for various occasions ranging from casual outings to semi-formal events. The gingham pattern is reminiscent of sunny picnics and vintage charm, yet it continues to be embraced by modern fashionistas for its fresh and clean look. The Peplum Silhouette The peplum top, characterized by its flared hemline, is renowned for its flattering fit. It cinches at the waist and flares out, creating a feminine and elegant shape. This design not only accentuates the waistline but also adds a touch of sophistication to any outfit. The combination of a peplum silhouette with the gingham pattern results in a piece that is both playful and polished. Styling the Gingham Peplum Top One of the best features of the gingham peplum top is its versatility. Here are a few styling tips to help you make the most of this charming piece",
    },
    {
      image: girlimage,
      heading: "Elegant in Every Way: The Timeless Charm of Frock Dresses",
      description:
        "There's something undeniably charming about a girl dressed in a frock. The timeless appeal of frock dresses transcends generations, making them a staple in every girl's wardrobe. From playful floral prints to sophisticated silhouettes, frock dresses offer a versatility that is unmatched. Whether you're attending a casual outing or a formal event, frock dresses can be styled to suit any occasion. Pair a floral frock with sandals for a day out in the sun, or dress it up with heels and accessories for a night on the town. The options are endless, and the result is always stunning. One of the best things about frock dresses is their ability to make you feel effortlessly beautiful. The way the fabric sways with every movement and the way the silhouette accentuates your figure is truly magical. It's no wonder that frock dresses have remained a fashion favorite for decades. So, the next time you're looking for an outfit that exudes charm and elegance, consider slipping into a frock dress. Embrace your femininity and let your style shine bright in a frock that is as unique and beautiful as you are.",
    },
    // Add more cards as needed
  ];
  return (
    <>
      <section className="fixed top-0 left-0 right-0 z-50 header flex items-center justify-evenly bg-gray-100 ">
        <h1 className="name p-7 text-3xl block w-2/5 font-semibold text-end border-r  border-black">
          FASHION BLOG
        </h1>
        <h1 className="blog p-6 text-2xl block w-1/4 border-r text-center border-black">
          BLOG
        </h1>
        <h1 className="contact  p-6 text-2xl block w-1/4 border-r text-center border-black">
          CONTACT
        </h1>
        <h1 className="about p-6 text-2xl block text-start w-1/4">ABOUT </h1>
      </section>

      <section className="main flex items-center justify-center  p-10 border-t border-b border-black my-24">
        <h1 className="text-6xl font-semibold">THE BLOG</h1>
      </section>
      <section classname="main mx-20">
        {/* <div className="flex items-center justify-center p-5 border-t border-b border-black"> */}
        <div className="main flex flex-wrap justify-center gap-6 px-10 py-10">
          {cardsData.map((card, index) => (
            <Card
              className="my-10"
              key={index}
              image={card.image}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </section>
      <section className="footer flex items-center justify-center bg-gray-100 p-10 border-t border-b border-black">
        <h1 className="text-3xl font-semibold">Fashion Blog</h1>
        <div className="flex items-center justify-center">
          <p className="text-2xl px-2 py-2 font-semibold">BLOG</p>
          <p className="text-2xl px-2 py-2 font-semibold">ABOUT</p>
          <p className="text-2xl px-2 py-2  font-semibold">CONTACT</p>
        </div>
      </section>
    </>
  );
};

export default Home;
