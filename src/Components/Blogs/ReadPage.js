import React from "react";
import moment from "moment";

import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

import { Link, useParams } from "react-router-dom";
import useServer from "../Hooks/useServer";
import Spinner from "../Utils/Spinner";
import "./Blog.css";
import RecentBlog from "./RecentBlog";
import { pageTitle } from "../Utils/Title";

const ReadPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useServer(id);

  pageTitle(`${data?.title || ""}`);

  if (isLoading) {
    return (
      <div className="absolute  top-1/4 left-2/4 w-12 h-12 bg-gray-50 shadow rounded-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <span className="absolute min-h-screen top-2/4 left-2/4">
        There was an server site {error.message}
      </span>
    );
  }

  return (
    <section>
      <section className="b-card relative rounded-b flex justify-center shadow-md ">
        <img src={data?.cover_img} alt="" className="w-full object-cover " />
        <div className="b-card-title p-5 md:p-8 w-[96%]  md:w-[80%] lg:w-[50%] absolute bottom-2 md:bottom-3 md:left-3 lg:bottom-10   lg:left-10 rounded">
          <span className="text-xsm text-gray-500 inline-flex items-baseline gap-2">
            <p>{moment(data?.createdAt).format("ll")}</p>{" "}
            <span className="text-[10px]">
              ({moment(data?.createdAt, "YYYYMMDD").fromNow()})
            </span>
          </span>
          <p className="text-[#292929] leading-8 mb-2 text-xl md:text-2xl font-semibold">
            {data?.title || ".."}
          </p>
          <p className="text-xs text-gray-600">Kabid Hassan</p>
        </div>
      </section>

      <article className="grid grid-cols-12 gap-5 mt-2 mx-2">
        <section className="col-span-12 lg:col-span-8">
          <div>
            <div
              className="post__description text-[#292929] text-lg "
              dangerouslySetInnerHTML={{ __html: data?.blog }}
            />
          </div>
          {/* Sharing section */}
          <div className="w-full flex  justify-center ">
            <section className="sharing-section  p-7 mt-10 rounded-md">
              <p className="text-2xl text-gray-400 border-b pb-2">
                Share this blog
              </p>
              <div className="flex flex-wrap justify-evenly my-[15px] gap-5">
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
          <div className="px-2 sticky top-0 r-header z-40 pt-2">
            <header className="border-b py-2 mt-2">
              <h3 className="text-gray-700">Recent post</h3>
            </header>
          </div>
          <div className="r-b-header">
            <RecentBlog />
          </div>
        </aside>
      </article>
    </section>
  );
};

export default ReadPage;
