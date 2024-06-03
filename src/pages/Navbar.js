import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed h-24 top-0 left-0 right-0 z-50 header flex items-center justify-evenly bg-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="name p-6 text-3xl block w-2/5 font-semibold text-end border-r  border-black">
          FASHION BLOG
        </h1>
        <h1 className="blog p-6 text-2xl block w-1/4 border-r text-center border-black">
          BLOG
        </h1>
        <h1 className="contact  p-6 text-2xl block w-1/4 border-r text-center border-black">
          CONTACT
        </h1>
        <h1 className="about p-6 text-2xl block text-start w-1/4">ABOUT </h1>
      </div>
    </nav>
  );
};
export default Navbar;
