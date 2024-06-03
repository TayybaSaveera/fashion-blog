import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex items-center justify-center bg-gray-100 p-10 border-t border-b border-black">
      <p>© 2021 Fashion Blog. All Rights Reserved.</p>
      <h1 className="text-3xl font-semibold">Fashion Blog</h1>
      <div className="flex items-center justify-center">
        <p className="text-2xl px-2 py-2 font-semibold">BLOG</p>
        <p className="text-2xl px-2 py-2 font-semibold">ABOUT</p>
        <p className="text-2xl px-2 py-2  font-semibold">CONTACT</p>
      </div>
    </footer>
  );
};

export default Footer;
