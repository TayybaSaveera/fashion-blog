import React from "react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="footer flex items-center justify-start bg-gray-100 p-10 border-t border-b border-black ">
      <div className="flex items-start justify-center flex-col px-10 w-1/4">
        <h1 className="text-2xl px-2 py-2 font-semibold flex text-left">
          Fashion Blog
        </h1>
        <p className="text-1xl px-2 py-2 font-semibold text-left">BLOG</p>
        <p className="text-1xl px-2 py-2 font-semibold text-left">ABOUT</p>
        <p className="text-1xl px-2 py-2  font-semibold text-left">CONTACT</p>
        <div className="flex items-start justify-center flex-row px-2 mt-10">
          <IconBrandInstagram stroke={2} />
          <IconBrandFacebook stroke={2} />
        </div>
      </div>
      <div>
        <div className="email mx-auto flex justify-between items-start w-3/4 flex-col">
          <h1 className="name p-6 text-1xl flex  text-end whitespace-nowrap  ">
            Don't miss out on the latest fashion trends!
          </h1>
          <p className="name px-6 text-1xl flex  text-end whitespace-nowrap  ">
            Enter your Email here
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Email"
              className="search-input w-96 py-2 ml-6 border border-black"
            />
            <button className="text-white bg-black w-56 py-2  border border-black">
              Subscribe
            </button>
          </div>
          <p className="text-1xl text-start p-6 mt-12 ">© 2021 Fashion Blog</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
