import React from "react";
import BlogWebPage from "../BlogWebPage";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { BlogCardDetails } from "./BlogCardDetails";

function Blog() {
  return (
    <>
      <Navbar first="Home" firstlink="/" />
      <main>
        <p>This is Blog</p>
        <div className="container">
          <BlogWebPage image={image} date={date} title={title} text={text} alt={alt} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
