import React, { useState } from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import "../../Home/Version/Version.css";
import "./Navigation.css";
import { BsFacebook, BsInstagram, BsPinterest, BsGithub } from "react-icons/bs";
import man from "../../Shared/Images/man.png";
import Works from "../../Home/Works/Works";
import Contact from "../../Home/Contact/Contact";
import About from "../../Home/About/About";
const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="md:grid grid-cols-12 gap-x-2">
        <div className="col-span-2">
          <div className=" bg-white xl:hidden flex justify-between w-full p-5 items-center relative z-50">
            <div className="flex justify-between  items-center space-x-3">
              <h1 className="leading-6 text-gray-900">Kabid Hassan</h1>
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
              show ? "translate-x-0" : "-translate-x-full "
            }  transform  xl:translate-x-0  ease-in-out transition duration-500  absolute  min-h-screen nav bg-white  md:sticky md:top-0 z-40`}
          >
            <div className="xl:flex flex-col items-center py-5 mx-5  border-gray-400 border-b">
              <div className="">
                <img
                  src={man}
                  alt="Images of Kabid Hossain"
                  className="img rainbow text-center"
                />
              </div>
              <Link
                to="/home"
                className="leading-6 text-4xl font-semibold text-gray-900 text-center py-5"
              >
                Kabid Hassan
              </Link>
            </div>

            <div className="flex flex-col justify-start items-center  p-5 w-full  space-y-3 pb-5">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "",
                  };
                }}
                to="works"
                className="flex jusitfy-start items-center py-2 space-x-6 w-full  focus:outline-none    text-gray-900 rounded "
              >
                Works
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "",
                  };
                }}
                to="about"
                className="flex jusitfy-start items-center py-2 space-x-6 w-full  focus:outline-none    text-gray-900 rounded "
              >
                About
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "",
                  };
                }}
                to="contact"
                className="flex jusitfy-start items-center py-2 space-x-6 w-full  focus:outline-none    text-gray-900 rounded "
              >
                Contact
              </NavLink>
            </div>

            {/* --------End------- */}
            <div className="flex flex-col justify-end absolute bottom-0 left-0 items-center h-full p-5  w-full -z-30 ">
              <div className=" flex justify-between items-center w-full">
                <Link to="#" className="text-2xl bg p-2 text-[#3b5998]">
                  <BsGithub />
                </Link>
                <Link to="#" className=" text-2xl bg p-2 text-[#3b5998]">
                  <BsFacebook />
                </Link>
                <Link to="#" className="text-2xl bg p-2 text-[#bc2a8d]">
                  <BsInstagram />
                </Link>
                <Link to="#" className=" text-2xl bg p-2 text-[#c8232c]">
                  <BsPinterest />
                </Link>
              </div>
              <div className="text-center mt-5 text-sm text-gray-400">
                <p>Copyright © 2022 Kabid Hassan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10">
          <Routes>
            <Route path="/" element={<Works />} />
            <Route path="works" element={<Works />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Navigation;
