import React from "react";
import "./Version.css";
import KabidImg from "../../Shared/Images/Kabid.jpg";
import { Link } from "react-router-dom";

const Version = () => {
  return (
    <section>
      <div className="min-h-screen min-w-[100vw] flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="flex flex-col justify-center items-center">
            <div className="rainbow">
              <img
                src={KabidImg}
                alt="Images of Kabid Hossain"
                className="w-[100%] h-[100%] img text-center"
              />
            </div>
            <h1>Kabid hossain</h1>
          </div>
          <p className="md:w-[400px] py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            quas!
          </p>
        </div>
        <div className="mt-4">
          <Link
            to="/v-english"
            type="button"
            className="text-gray-800 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 mr-2 mb-2"
          >
            English Version
          </Link>
          <Link
            to="/v-bangla"
            type="button"
            className="text-gray-800 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 mr-2 mb-2"
          >
            Bangla Version
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Version;
