import NoWorkResult from "postcss/lib/no-work-result";
import React from "react";
import { Link } from "react-router-dom";
import SrcBar from "../Utils/SrcBar";
import { pageTitle } from "../Utils/Title";
import RecentBlog from "./RecentBlog";

const blog = [
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
];

const Blog = () => {
  pageTitle("Blog");

  return (
    <section className="blog-section">
      <div className="b-card relative rounded-b flex justify-center shadow-md ">
        {/* <img src="" alt="" /> */}
        <div className="b-card-title p-5 md:p-8 w-[96%]  md:w-[80%] lg:w-[50%] absolute bottom-2 md:bottom-3 md:left-3 lg:bottom-10   lg:left-10 rounded">
          <span className="text-xsm text-gray-500">
            <time datetime="2001-05-15T19:00">15 May 2022</time>
          </span>
          <p className="text-gray-700 leading-8 mb-2 text-xl md:text-2xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </p>
          <p className=" text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            placeat quas neque similique doloribus autem sint mollitia minus
            vitae ipsum quibusdam
            <Link
              to="#"
              className="ml-1 font-extralight text-gray-500 text-sm hover:underline hover:text-[#5da0de]"
            >
              ...see more
            </Link>
          </p>
        </div>
      </div>

      <section className="grid grid-cols-12 gap-5 mt-8 sm:mx-2 md:mx-8">
        <section className=" col-span-12 lg:col-span-8">
          {blog.map((data) => {
            return (
              <div className="c-b-card grid grid-cols-1 md:grid-cols-2 shadow p-5 gap-5 bg-white rounded  mx-5 md:mx-0 mb-5">
                <div className="c-img col-span-1 rounded">
                  <img
                    src="https://images.unsplash.com/photo-1652542207647-7c1714e7b596?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074"
                    alt=""
                    className="rounded image"
                  />
                </div>
                <div className="c-b-des col-span-1 flex flex-col justify-center">
                  <div className="c-b-title flex flex-col gap-2">
                    <p className="text-gray-700 leading-8 mb-2 text-xl md:text-2xl font-semibold">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <p className=" text-gray-600">
                      dolor sit amet consectetur adipisicing elit. Nostrum,
                      ex.Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Omnis, maiores.{" "}
                      <Link
                        to="#"
                        className="ml-1 font-extralight text-gray-500 text-sm hover:underline hover:text-[#5da0de]"
                      >
                        ...see more
                      </Link>
                    </p>
                    <span className="text-xsm text-gray-500 ">
                      <time datetime="2001-05-15T19:00">15 May 2022</time>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
            <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200 mx-5 md:mx-0">
              <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                <svg
                  width={14}
                  height={8}
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.1665 4H12.8332"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.1665 4L4.49984 7.33333"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.1665 4.00002L4.49984 0.666687"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm ml-3 font-medium leading-none ">
                  Previous
                </p>
              </div>
              <div className="sm:flex hidden">
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                  1
                </p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                  2
                </p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                  3
                </p>
                <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">
                  4
                </p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                  5
                </p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                  6
                </p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                  7
                </p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">
                  8
                </p>
              </div>
              <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                <p className="text-sm font-medium leading-none mr-3">Next</p>
                <svg
                  width={14}
                  height={8}
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.1665 4H12.8332"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 7.33333L12.8333 4"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 0.666687L12.8333 4.00002"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <aside className=" col-span-12 lg:col-span-4 w-full ">
          <div className="mx-5 md:mx-0">
            <div className="src-bar">
              <SrcBar />
            </div>

            <div className="recent-blog">
              <div className="r-b-header ">
                <RecentBlog />
              </div>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Blog;
