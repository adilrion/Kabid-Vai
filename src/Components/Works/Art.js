import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Zoom } from "react-reveal";
import Viewer from "react-viewer";
import { getArt } from "../Hooks/getApi";
import Spinner from "../Utils/Spinner";
import { pageTitle } from "../Utils/Title";

import "./Works.css";

// import { BsSearch } from "react-icons/bs";

const Works = () => {
  pageTitle("Art");

  const { data, isLoading, isError, error } = useQuery(["art"], () => getArt());

  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

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
      <article>
        <nav className="flex justify-center items-center m-2 rounded md:sticky md:top-2 z-50 absolute px-2">
          {/* <h1 className=" py-3 uppercase">Recent Works </h1>
           */}
          <div className="search-box shadow hidden md:block">
            <input
              className="search-input"
              type="text"
              name=""
              placeholder="Search by Artworks, gallery, theme.."
            />
            <a href="#" className="search-btn">
              <p className="fa-search">
                <BsSearch />
              </p>
            </a>
          </div>
        </nav>

        <div className="grid grid-cols-4 grid-flow-row-dense gap-1 md:gap-3 relative m-2">
          {data?.map((data, index) => {
            return (
              <Zoom>
                <div
                  key={data?._id}
                  className={`${
                    index % 2 === 0
                      ? "col-span-4 md:col-span-1"
                      : "col-span-4 md:col-span-2"
                  } w-full h-auto art-section  bg-transparent`}
                  onClick={() => {
                    setVisible(true);
                    setActiveIndex(index);
                  }}
                >
                  <img
                    src={data?.art_img}
                    alt="#"
                    className="w-full h-full object-center object-cover aspect-video  art-images "
                  />

                  <div class="">
                    <p class="text">{data.title}</p>
                  </div>
                </div>
              </Zoom>
            );
          })}
          <Viewer
            visible={visible}
            onClose={() => {
              setVisible(false);
            }}
            zoomSpeed={0.2}
            images={data}
            activeIndex={activeIndex}
            downloadable
          />
        </div>
      </article>
    </section>
  );
};

export default Works;
