import React from "react";
import { Fade, Zoom } from "react-reveal";
import "./About.css";
import img1 from "../../Shared/Images/about2.png";
import img2 from "../../Shared/Images/about3.png";
import img3 from "../../Shared/Images/about4.png";
import { MdDoubleArrow } from "react-icons/md";
import { TiArrowForward } from "react-icons/ti";

const About = () => {
  return (
    <article>
      <section className="c-about md:px-10">
        <nav className="c-header z-40">
          <h1 className="">
            <span className=" uppercase">About Me!😎</span>
          </h1>
        </nav>

        <div className="c-header-details relative">
          <div className="md:w-[600px] py-5 border-gray-400 border-b">
            <h1>About Me!😎</h1>
            <p>
              Good at! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni illum minus officia minima sunt eveniet dignissimos
            </p>
          </div>
          <div className="bottom-arrow-icon">
            {/* <p className="text-3xl">Good At</p> */}
            <h1>
              <TiArrowForward />
            </h1>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 md:min-h-[540px] p-10 relative">
            <div className="col-span-1 h-auto relative flex justify-evenly items-center mx-5">
              <div className="w-full flex flex-col justify-evenly items-center ">
                <div className="a-skill">
                  <p>Illustrator </p>
                </div>
                <div className="a-skill">
                  <p>Abstract Artist</p>
                </div>
                <div className="a-skill">
                  <p>Designer</p>
                </div>
              </div>

              <div className="a-bottom-icon">
                <h1>
                  <MdDoubleArrow />
                </h1>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img
                src={img1}
                alt=""
                width="100%"
                height="100%"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:min-h-[540px] p-10 relative">
            <div className="col-span-1 flex justify-center items-center">
              <img
                src={img2}
                alt=""
                width="100%"
                height="100%"
                className="rounded-full"
              />
            </div>
            <div className="col-span-1 h-auto relative flex justify-evenly items-center mx-5">
              <div className="w-full flex flex-col justify-evenly items-center ">
                <div className="a-skill">
                  <p>Illustrator </p>
                </div>
                <div className="a-skill">
                  <p>Abstract Artist</p>
                </div>
                <div className="a-skill">
                  <p>Designer</p>
                </div>
              </div>

              <div className="a-bottom-icon">
                <h1>
                  <MdDoubleArrow />
                </h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2  md:min-h-[540px] p-10 relative">
            <div className="col-span-1 h-auto relative flex justify-evenly items-center mx-5">
              <div className="w-full flex flex-col justify-evenly items-center ">
                <div className="shape">
                  <p className="">Professional Biriyani Lover!😎</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              {" "}
              <img
                src={img3}
                alt=""
                width="100%"
                height="100%"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
