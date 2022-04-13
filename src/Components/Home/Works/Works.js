import React from "react";
import { useState } from "react";

const Works = () => {
  return (
    <div className="">
      <div className="">
        <nav className=" pb-5 pt-2 w-full flex justify-center">
          <h1 className="border-solid border-b-4 border-gray-900 px-20">
            Recent Works{" "}
          </h1>
        </nav>

        {/* Image gallery */}
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-1 row-span-0 drop-shadow-md">
            <img
              src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk="
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="col-span-2 row-span-0">
            <img
              src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              alt="#"
              className="w-full h-full  object-center object-cover"
            />
          </div>
          <div className="col-span-1 row-span-0">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>{" "}
          <div className="col-span-2 row-span-0">
            <img
              src="https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg"
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="col-span-2 row-span-0">
            <img
              src="https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg"
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="col-span-1 row-span-0">
            <img
              src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk="
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="col-span-2 row-span-0">
            <img
              src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="col-span-1 row-span-0">
            <img
              src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk="
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="col-span-1 row-span-0">
            <img
              src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="col-span-1 row-span-0">
            <img
              src="https://images.freeimages.com/images/large-previews/5a3/flowers-1375015.jpg"
              alt="#"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
