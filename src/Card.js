import React, { useState } from "react";

const Card = ({ image, heading, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden"
      style={{ height: "400px" }}
    >
      <img
        className="rounded-t-lg"
        src={image}
        alt=""
        style={{ height: "50%" }}
      />
      <div className="p-5" style={{ height: "50%" }}>
        <h2 className="mb-2 text-2xl font-bold tracking-tight dark:text-black">
          {heading}
        </h2>
        <div
          className={`card-description overflow-hidden ${expanded ? "block" : "hidden"} mb-3 font-normal text-black dark:text-gray-400`}
          style={{ height: "calc(100% - 56px)" }}
        >
          {description}
        </div>
        <button
          onClick={handleClick}
          className="text-sm font-medium text-center text-white bg-blue-700 rounded-lg px-3 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {expanded ? "Hide Description" : "Show Description"}
        </button>
      </div>
    </div>
  );
};

export default Card;
