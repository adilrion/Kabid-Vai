import React from "react";
import { Link } from "react-router-dom";
import SrcBar from "../Utils/SrcBar";
import Blog from "./Blog";
import "./Blog.css";
import RecentBlog from "./RecentBlog";

const BlogMain = () => {
  return (
    <section>
      <section className="header">
        <div className="b-card relative rounded-b flex justify-center shadow-md ">
          <img
            src="https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
            alt=""
            className="w-full object-cover"
          />
          <div className="b-card-title p-5 md:p-8 w-[96%]  md:w-[80%] lg:w-[50%] absolute bottom-2 md:bottom-3 md:left-3 lg:bottom-10   lg:left-10 rounded">
            <span className="text-xsm text-gray-500">
              <time dateTime="2001-05-15T19:00">15 May 2022</time>
            </span>
            <p className="text-gray-700 leading-8 mb-2 text-xl md:text-2xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
            <p className=" text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              placeat quas neque similique doloribus autem sint mollitia minus
              vitae ipsum quibusdam
              <Link
                to="read"
                className="ml-1 font-light text-gray-500 text-sm hover:underline hover:text-[#5da0de]"
              >
                ...see more
              </Link>
            </p>
          </div>
        </div>
      </section>
      <article>
        <section className="grid grid-cols-12 gap-5 mt-8 sm:mx-2 md:mx-8">
          <section className="col-span-12 lg:col-span-8 ">
            <Blog />
          </section>
          <aside className=" col-span-12 lg:col-span-4 w-full ">
            <div className="mx-5 md:mx-0">
              <div className="r-b-header">
                <RecentBlog />
              </div>
            </div>
          </aside>
        </section>
      </article>
    </section>
  );
};

export default BlogMain;
