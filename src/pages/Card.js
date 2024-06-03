// Card.js
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, heading, description }) => {
  return (
    <div className="w-450px h-800px p-4 bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
      <img
        className="w-full h-3/5 object-cover rounded-t-lg"
        src={image}
        alt="Card"
      />
      <div className="p-5 h-2/5 flex flex-col justify-between">
        <h2 className="text-2xl font-bold mb-2">{heading}</h2>
        <p className="text-black mb-2">{description}</p>
        <Link
          to={`/blog-detail/${id}`}
          // className="text-sm font-medium text-center text-white bg-blue-700 rounded-lg px-3 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
