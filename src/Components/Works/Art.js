import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Zoom } from "react-reveal";
import Viewer from "react-viewer";
import { getArt } from "../Hooks/getApi";
import Spinner from "../Utils/Spinner";
import SrcBar from "../Utils/SrcBar";
import { pageTitle } from "../Utils/Title";

import "./Works.css";

// import { BsSearch } from "react-icons/bs";

const Works = () => {
  pageTitle("Art");

  const [post, setPost] = useState([]);
  const [srcResult, setSrcResult] = useState([]);

  const { data, isLoading, isError, error } = useQuery(["art"], () => getArt());
  useEffect(() => {
    setPost(data);
    setSrcResult(data);
  }, [data]);
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
        <nav className="px-2 w-full md:flex justify-center items-center">
          <div className=" sticky top-0  z-40 pt-2">
            <div className="md:w-[450px]">
              <SrcBar post={post} setSrcResult={setSrcResult} />
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-4 grid-flow-row-dense gap-2 md:gap-3 relative m-2">
          {srcResult?.map((data, index) => {
            return (
              <Zoom>
                <div
                  key={data?._id}
                  className={`${
                    index % 2 === 0
                      ? "col-span-4 md:col-span-1"
                      : "col-span-4 md:col-span-2"
                  } w-full h-full max-h-[450px] art-section  bg-transparent`}
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
                    <p class="absolute bottom-[5px] left-2/4 -translate-x-2/4 w-full text-center  text-md text">
                      {data.title}
                    </p>
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
            images={srcResult}
            activeIndex={activeIndex}
            downloadable
          />
        </div>
      </article>
    </section>
  );
};

export default Works;
