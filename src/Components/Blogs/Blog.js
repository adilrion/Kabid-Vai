import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
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
          </p>
        </div>
      </div>

      <section className="grid grid-cols-12 gap-8 mt-10 sm:mx-2 md:mx-0">
        <section className=" col-span-12 lg:col-span-8">
          <div className="c-b-card grid grid-cols-1 md:grid-cols-2 shadow p-5 gap-5 bg-white rounded">
            <div className="c-img col-span-1 rounded">
              <img
                src="https://images.unsplash.com/photo-1652542207647-7c1714e7b596?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074"
                alt=""
                className="rounded"
              />
            </div>
            <div className="c-b-des col-span-1 flex flex-col justify-center">
              <div className="c-b-title flex flex-col gap-2">
                <p className="text-gray-700 leading-8 mb-2 text-xl md:text-2xl font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <p className=" text-gray-600">
                  dolor sit amet consectetur adipisicing elit. Nostrum, ex.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                  maiores.{" "}
                  <Link
                    to="#"
                    className="ml-1 font-semibold text-gray-600 text-xs"
                  >
                    Read more
                  </Link>
                </p>
                <span className="text-xsm text-gray-500 ">
                  <time datetime="2001-05-15T19:00">15 May 2022</time>
                </span>
              </div>
            </div>
          </div>
        </section>
        <aside className=" col-span-12 lg:col-span-4">
          <div className="recent-blog">
            <div className="r-b-header w-full  shadow bg-white">
              <p className="p-3 text-md text-gray-800 text-xl border-b mx-2 ">
                Recent Blog
              </p>

              <div className="mx-2">
                <h1>blgo</h1>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default Blog;
