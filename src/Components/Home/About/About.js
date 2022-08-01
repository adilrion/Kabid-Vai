import React from "react";
import Fade from "react-reveal/Fade";
import "./About.css";
import img1 from "../../Shared/Images/about2.png";
import img2 from "../../Shared/Images/about3.png";
import img3 from "../../Shared/Images/about4.png";
import { MdDoubleArrow } from "react-icons/md";
import { TiArrowForward } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

const About = () => {
  return (
    <article>
      <section className="c-about md:px-10">
        <nav className="fixed top-2/4 left-2/4 -translate-x-2/4 -z-50 text-md text-center md:text-2xl lg:text-4xl text-gray-200 bg-transparent">
          <h1 className="">
            <span className=" uppercase ">
              About Me!<span className="opacity-50">😎</span>
            </span>
          </h1>
        </nav>

        <div className="c-header-details relative">
          <div className="md:w-[600px] py-5 mx-5 border-gray-400 border-b">
            <Zoom>
              <h1>About Me!😎</h1>
            </Zoom>
            <Fade bottom cascade>
              <p>
                Good at! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Magni illum minus officia minima sunt eveniet dignissimos
              </p>
            </Fade>
          </div>
          <Zoom>
            <div className="bottom-arrow-icon">
              <h1>
                <TiArrowForward />
              </h1>
            </div>
          </Zoom>
        </div>
        <div>
          <div className="grid grid-cols-2 md:min-h-[540px] md:p-10 relative">
            <div className="col-span-2 order-last md:order-first md:col-span-1 h-auto relative flex justify-evenly items-center mx-5 pb-5 md:pb-0">
              <div className="w-full flex flex-col justify-evenly items-center ">
                <Link to="#" className=" a-skill shadow ">
                  <p>Illustrator </p>
                </Link>
                <Link to="#" className=" a-skill shadow">
                  <p>Abstract Artist</p>
                </Link>
                <Link to="#" className=" a-skill shadow">
                  <p>Designer</p>
                </Link>
              </div>

              <div className=" absolute bottom-0 left-2/4 -translate-x-2/4 a-bottom-icon">
                <h1>
                  <MdDoubleArrow className="rotate-90 text-[#3f3d56] text-[70px]" />
                </h1>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center items-center ">
              <Zoom>
                <img
                  src={img1}
                  alt=""
                  width="100%"
                  height="100%"
                  className="rounded-full"
                />
              </Zoom>
            </div>
          </div>

          <div className="grid grid-cols-2 md:min-h-[540px] md:p-10 relative">
            <div className="col-span-2 md:col-span-1  flex justify-center items-center pt-8 md:pt-0">
              <Zoom>
                <img
                  src={img2}
                  alt=""
                  width="100%"
                  height="100%"
                  className="rounded-full"
                />
              </Zoom>
            </div>
            <div className="col-span-2 md:col-span-1 pb-5 md:pb-0 h-auto relative flex justify-evenly items-center mx-5">
              <div className="w-full flex flex-col justify-evenly bg-transparent items-center ">
                <Link to="#" className=" a-skill shadow">
                  <p>Researcher</p>
                </Link>
                <Link to="#" className=" a-skill shadow">
                  <p>Educator</p>
                </Link>
                <Link to="#" className=" a-skill shadow">
                  <p>Content Creator</p>
                </Link>
              </div>

              <div className=" absolute bottom-0 left-2/4 -translate-x-2/4 a-bottom-icon ">
                <h1>
                  <MdDoubleArrow className="rotate-90 text-[#3f3d56] text-[70px]" />
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:min-h-[540px] mt-20 md:mt-0 md:p-10 relative mb-10">
            <div className="col-span-2 order-last md:order-first md:col-span-1 h-auto relative flex justify-evenly items-center mx-5 bg-transparent">
              <div className="w-full flex flex-col justify-evenly bg-transparent items-center ">
                <Fade bottom cascade>
                  <div className="shape shadow bg-transparent">
                    <p className="">Professional Biriyani Lover!😎</p>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-span-2  md:col-span-1  flex justify-center items-center">
              {" "}
              <Zoom>
                <img
                  src={img3}
                  alt=""
                  width="100%"
                  height="100%"
                  className="rounded-full"
                />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
