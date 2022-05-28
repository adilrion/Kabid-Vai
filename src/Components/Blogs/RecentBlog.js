import React from "react";
import SrcBar from "../Utils/SrcBar";
import "./Blog.css";

const blog = [
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
];

const RecentBlog = () => {
  return (
    <section className="relative">
      <div className="px-2 sticky top-0 r-header">
        <div className="src-bar">
          <SrcBar />
        </div>
        <header className="border-b py-2 mt-2">
          <h3 className="text-gray-700">Recent post</h3>
        </header>
      </div>

      <article className="mt-4 mx-2 overflow-y-auto h-screen">
        {blog.map((data) => {
          return (
            <div className="shadow rounded mb-4">
              <div className="w-full max-h-[200px] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="images"
                  className="h-[100%] w-full object-fill rounded-t"
                />
              </div>
              <div className="p-2">
                <h3 className="text-gray-700">Lorem ipsum dolor sit amet.</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Provident, sed.
                </p>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default RecentBlog;
