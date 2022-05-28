import React from "react";
import "./Version.css";
import KabidImg from "../../Shared/Images/Kabid.jpg";
import man from "../../Shared/Images/man.png";
import { Link } from "react-router-dom";

const Version = () => {
  return (
    <section>
      <div className="min-h-screen min-w-[100vw] flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <img
                src={man}
                alt="Images of Kabid Hossain"
                className="img rainbow shadow text-center"
              />
            </div>
            <h1 className="">Kabid hossain</h1>
          </div>
          <p className="md:w-[400px] py-2 intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            quas!
          </p>
        </div>
        <div className="mt-4 gap-5 flex">
          <Link
            to="/v-english"
            type="button"
            className="shadow bg-white focus:ring-gray-300 font-bold rounded-md text-md text-gray-900 px-5 py-2"
          >
            English Version
          </Link>
          <Link
            to="/v-bangla"
            type="button"
            className="shadow bg-white focus:ring-gray-300 font-bold rounded-md text-md text-gray-900 px-5 py-2"
          >
            Bangla Version
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Version;
