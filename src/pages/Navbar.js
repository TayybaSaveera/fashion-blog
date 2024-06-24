import React from "react";
import { Link } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
const Navbar = () => {
  return (
    <nav className="fixed h-24 top-0 left-0 right-0 z-50 header flex items-center justify-evenly bg-gray-100 border-b border-black">
      <div className="container mx-auto flex justify-between items-center border-r border-black">
        <h1 className="name p-6 text-2xl block w-2/5 font-semibold text-end border-r border-black ">
          <Link to={"/"}>FASHION BLOG</Link>
        </h1>
        <h1 className="blog p-6 text-2xl block w-1/4 border-r text-center border-black hover:bg-black hover:text-white">
          BLOG
        </h1>
        <h1 className="about p-6 text-2xl block w-1/4 border-r text-center border-black hover:bg-black hover:text-white">
          <Link to={"/about"}> ABOUT</Link>
        </h1>
        <h1 className="contact p-6 text-2xl block w-1/4 border-r text-center border-black hover:bg-black hover:text-white">
          <Link to={"/contact"}> CONTACT</Link>
        </h1>
        <div className="search-container p-6 flex flex-row">
          <IconSearch stroke={1} />
          <input
            type="text"
            placeholder="Search..."
            className="search-input ml-2  bg-grey-100"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
