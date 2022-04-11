import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Home/Version/Version.css";
import { BsFacebook, BsInstagram, BsPinterest, BsGithub } from "react-icons/bs";
import KabidImg from "../../Shared/Images/Kabid.jpg";
const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div>
        <div className="rounded-r bg-white xl:hidden flex justify-between w-full p-5 items-center ">
          <div className="flex justify-between  items-center space-x-3">
            <h1 className=" leading-6 text-gray-900">Kabid Hassan</h1>
          </div>
          <div
            aria-label="toggler"
            className="flex justify-center items-center"
          >
            <button
              aria-label="open"
              id="open"
              onClick={() => setShow(true)}
              className={`${
                show ? "hidden" : ""
              } focus:outline-none focus:ring-2`}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 18H20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              aria-label="close"
              id="close"
              onClick={() => setShow(false)}
              className={`${
                show ? "" : "hidden"
              } focus:outline-none focus:ring-2 text-blue-700`}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="Main"
          className={`${
            show ? "translate-x-0" : "-translate-x-full"
          } xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-white flex-col`}
        >
          <div className="hidden xl:flex flex-col p-5  border-gray-600 border-b">
            <div className="rainbow">
              <img
                src={KabidImg}
                alt="Images of Kabid Hassan"
                className="w-[200px] h-[200px] text-center"
              />
            </div>
            <h1 className="leading-6 text-gray-900 text-center py-5">
              Kabid Hassan
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              velit.
            </p>
          </div>
          {/* grid w-full h-[100vh] content-between */}
          <div className="m-2">
            <div className="flex flex-col justify-start items-center  p-5 w-full  space-y-3 pb-5 mt-5">
              <Link
                to="#"
                className="flex jusitfy-start items-center py-2 space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-gray-900 rounded "
              >
                <p className="text-base leading-4 ">Works</p>
              </Link>
              <Link
                to="#"
                className="flex jusitfy-start items-center py-2 space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-gray-900 rounded "
              >
                <p className="text-base leading-4 ">About</p>
              </Link>
              <Link
                to="#"
                className="flex jusitfy-start items-center py-2 space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-gray-900 rounded "
              >
                <p className="text-base leading-4 ">Contact</p>
              </Link>
            </div>
            {/* --------End------- */}
            <div className="flex flex-col justify-between items-center h-full p-5  w-full  mt-5">
              <div className=" flex justify-between items-center w-full">
                <Link to="#" className="text-gray-700 text-2xl ">
                  <BsGithub />
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 text-2xl focus:text-[#3b5998]"
                >
                  <BsFacebook />
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 text-2xl focus:text-[#bc2a8d]"
                >
                  <BsInstagram />
                </Link>
                <Link
                  to="#"
                  className="text-gray-700 text-2xl focus:text-[#c8232c]"
                >
                  <BsPinterest />
                </Link>
              </div>
              <div className="text-center mt-5 text-sm text-gray-400">
                <p>Copyright © 2022 Kabid Hassan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
