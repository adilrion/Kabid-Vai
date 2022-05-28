import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Zoom } from "react-reveal";
import Viewer from "react-viewer";
import { pageTitle } from "../../Utils/Title";

import "./Works.css";

// import { BsSearch } from "react-icons/bs";

const library = [
  {
    id: "1",
    title: "creative ",
    src: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=",
  },
  {
    id: "2",
    title: "Over the million people",
    src: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    id: "3",
    title: "X",
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: "4",
    title: "E",
    src: "https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg",
  },
  {
    id: "5",
    title: "Z",
    src: "https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg",
  },
  {
    id: "6",
    title: "Q",
    src: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=",
  },
  {
    id: "7",
    title: "S",
    src: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    id: "8",
    title: "S",
    src: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=",
  },
  {
    id: "9",
    title: "S",
    src: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    id: "10",
    title: "S",
    src: "https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg",
  },
  {
    id: "11",
    title: "S",
    src: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    id: "12",
    title: "Z",
    src: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    id: "13",
    title: "A",
    src: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=",
  },
];

const Works = () => {
  pageTitle("Works");
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
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
          {library.map((data, index) => {
            return (
              <Zoom>
                <div
                  key={data.id}
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
                    src={data.src}
                    alt="#"
                    className="w-full h-full object-center object-cover rounded art-images "
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
            images={library}
            activeIndex={activeIndex}
            downloadable
          />
        </div>
      </article>
    </section>
  );
};

export default Works;
