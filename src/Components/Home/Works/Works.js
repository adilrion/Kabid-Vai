import React from "react";
import { useState } from "react";

const library = [
  {
    id: "1",
    title: "A",
    img: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=",
  },
  {
    id: "2",
    title: "V",
    img: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    id: "3",
    title: "X",
    img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: "4",
    title: "E",
    img: "https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg",
  },
  {
    id: "5",
    title: "Z",
    img: "https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg",
  },
  {
    id: "6",
    title: "Q",
    img: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=",
  },
  {
    id: "7",
    title: "S",
    img: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    id: "7",
    title: "S",
    img: "https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk=",
  },
  {
    id: "7",
    title: "S",
    img: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  },
  {
    id: "7",
    title: "S",
    img: "https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg",
  },
];

const Works = () => {
  return (
    <div className="">
      <div className="">
        <nav className=" pb-5 pt-2 w-full flex justify-center">
          <h1 className="border-solid border-b-4 border-gray-900 px-20">
            Recent Works{" "}
          </h1>
        </nav>

        <div className="grid grid-cols-4 grid-flow-row-dense gap-1 md:gap-3 px-2 relative">
          {library.map((data, index, array) => (
            <div
              className={`${
                index % 2 === 0 ? "col-span-1" : "col-span-2"
              } w-full h-full`}
            >
              <img
                src={data.img}
                alt="#"
                className="w-full h-full object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
