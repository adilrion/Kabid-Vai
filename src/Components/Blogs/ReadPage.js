import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

import { Link, useLocation } from "react-router-dom";
import "./Blog.css";
import RecentBlog from "./RecentBlog";

const ReadPage = () => {
  const { title, img, des, id, writer } = useLocation().state.data;
  // console.log(id);
  return (
    <section>
      <section className="b-card relative rounded-b flex justify-center shadow-md ">
        <img
          src={
            img ||
            "https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          }
          alt=""
          className="w-full object-cover rounded-b"
        />
        <div className="b-card-title p-5 md:p-8 w-[96%]  md:w-[80%] lg:w-[50%] absolute bottom-2 md:bottom-3 md:left-3 lg:bottom-10   lg:left-10 rounded">
          <span className="text-xsm text-gray-600">
            <time dateTime="2001-05-15T19:00">15 May 2022</time>
          </span>
          <p className="text-gray-800 leading-8 mb-2 text-xl md:text-2xl font-semibold">
            {title || ".."}
          </p>
          <p className="text-xs text-gray-600">{writer || ".."}</p>
        </div>
      </section>

      <article className="grid grid-cols-12 gap-5 mt-8 sm:mx-2 md:mx-8">
        <section className="col-span-12 lg:col-span-8">
          <div>{des || ".."}</div>

          <div className="w-full flex justify-center ">
            <section className="sharing-section  p-7 mt-10 rounded-md">
              <p className="text-2xl text-gray-400 border-b pb-2">
                Share this blog
              </p>
              <div className="flex justify-evenly my-[15px] gap-10">
                <Link
                  to="#"
                  className="text-3xl h-fit p-4 rounded-full  border hover:border-[#3b5998] text-[#3b5998] transition ease-in-out duration-300"
                >
                  <BsFacebook />
                </Link>

                <Link
                  to="#"
                  className="text-3xl h-fit p-4 rounded-full  border hover:border-[#1DA1F2] text-[#1DA1F2]  transition ease-in-out duration-300"
                >
                  <BsTwitter />
                </Link>
                <Link
                  to="#"
                  className="text-3xl h-fit p-4 rounded-full  border hover:border-[#0078c7] text-[#0078c7]  transition ease-in-out duration-300"
                >
                  <BsLinkedin />
                </Link>
                <Link
                  to="#"
                  className="text-3xl h-fit p-4 rounded-full  border hover:border-[#bc2a8d] text-[#bc2a8d] transition ease-in-out duration-300"
                >
                  <BsInstagram />
                </Link>

                <Link
                  to="#"
                  className="text-3xl h-fit p-4 rounded-full  border hover:border-[#c8232c] text-[#c8232c] transition ease-in-out duration-300"
                >
                  <BsPinterest />
                </Link>
              </div>
            </section>
          </div>
        </section>
        <aside className=" col-span-12 lg:col-span-4 w-full mx-5 md:mx-0">
          <div className="r-b-header">
            <RecentBlog />
          </div>
        </aside>
      </article>
    </section>
  );
};

export default ReadPage;
