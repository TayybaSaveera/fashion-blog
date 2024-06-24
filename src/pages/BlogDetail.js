import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  return <Navbar />;
};
export default BlogDetail;
