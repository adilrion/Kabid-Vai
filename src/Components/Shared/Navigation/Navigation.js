import React, { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Blog from "../../Blogs/Blog";
import ReadPage from "../../Blogs/ReadPage";
import About from "../../Home/About/About";
import Contact from "../../Home/Contact/Contact";
import "../../Home/Version/Version.css";
import Works from "../../Home/Works/Works";
import man from "../../Shared/Images/man.png";
import "./Navigation.css";
const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="xl:grid grid-cols-12 gap-x-2 relative z-50">
        <div className="sm:col-span-12 xl:col-span-2 navigation">
          <nav className="relative sticky top-0 z-50">
            <div className=" xl:hidden flex justify-between h-[8vh] p-6 items-center bg-white bg-transparent">
              <div className="flex justify-between  items-center space-x-3">
                <img
                  className="rounded-full w-[20px] h-[20px]"
                  src={man}
                  alt="kabid Hassan photos"
                />
                <p className="text-2xl font-bold leading-6 text-gray-800">
                  Kabid hassan
                </p>
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
              } xl: transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-[92vh]  md:h-[100vh]  w-full sm:w-64  flex-col shadow navigation absolute z-50 bg-white `}
            >
              <div className="hidden xl:block xl:flex flex-col items-center py-5 mx-5  border-gray-400 border-b">
                <div className="">
                  <img
                    src={man}
                    alt="Images of Kabid Hossain"
                    className="img rainbow text-center shadow"
                  />
                </div>
                <Link
                  to="/home"
                  className="leading-8 text-4xl font-semibold text-gray-700 text-center pt-5"
                >
                  <span className="">Kabid</span> Hassan
                </Link>
              </div>
              <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full   space-y-6 pb-5 ">
                <Link
                  to="/works"
                  onClick={() => setShow(false)}
                  className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none focus:text-gray-900  text-gray-600 rounded "
                >
                  <p className="text-base text-[18px] font-medium  leading-4 ">
                    Works
                  </p>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setShow(false)}
                  className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-gray-600 focus:text-gray-900   rounded "
                >
                  <p className="text-base text-[18px] font-medium leading-4 ">
                    Contact
                  </p>
                </Link>
                <Link
                  to="/about"
                  onClick={() => setShow(false)}
                  className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-gray-900  text-gray-600 rounded "
                >
                  <p className="text-base text-[18px] font-medium leading-4  ">
                    About
                  </p>
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setShow(false)}
                  className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-gray-900  text-gray-600 rounded "
                >
                  <p className="text-base text-[18px] font-medium leading-4  ">
                    Blog
                  </p>
                </Link>
              </div>

              <div className="flex flex-col justify-end items-center h-full pb-6  px-6  w-full">
                <div className=" flex justify-center items-center w-full space-x-2">
                  <div className="flex flex-col justify-between items-center  space-x-2">
                    <div className=" flex justify-between items-center w-full text-gray-600">
                      <Link
                        to="#"
                        className=" text-2xl shadow-md border border-gray-100 rounded-full p-2 hover:text-[#3b5998]"
                      >
                        <BsFacebook />
                      </Link>
                      <Link
                        to="#"
                        className="text-2xl shadow-md border border-gray-100 rounded-full p-2 hover:text-[#bc2a8d]"
                      >
                        <BsInstagram />
                      </Link>
                      <Link
                        to="#"
                        className="shadow-md border border-gray-100 rounded-full text-2xl p-2 hover:text-[#0078c7]"
                      >
                        <BsLinkedin />
                      </Link>
                      <Link
                        to="#"
                        className="text-2xl shadow-md border border-gray-100 rounded-full p-2 hover:text-[#3b5998]"
                      >
                        <BsGithub />
                      </Link>
                    </div>
                    <div className="text-center mt-3 text-sm text-gray-400">
                      <p>Copyright © 2022 Kabid Hassan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-span-10">
          <Routes>
            <Route path="/" element={<Works />} />
            <Route path="home" element={<Works />} />
            <Route path="works" element={<Works />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="read/:id" element={<ReadPage />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Navigation;
