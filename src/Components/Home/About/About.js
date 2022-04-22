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
        <nav className="c-header">
          <h1 className="">
            <span className=" uppercase">About Me!😎</span>
          </h1>
        </nav>

        <div className="c-header-details relative">
          <div className="md:w-[600px] py-5 border-gray-400 border-b">
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
            <div className="col-span-2 order-last md:order-first md:col-span-1 h-auto relative flex justify-evenly items-center mx-5">
              <div className="w-full flex flex-col justify-evenly items-center ">
                <Link to="#" className="a-skill">
                  <p>Illustrator </p>
                </Link>
                <Link to="#" className="a-skill">
                  <p>Abstract Artist</p>
                </Link>
                <Link to="#" className="a-skill">
                  <p>Designer</p>
                </Link>
              </div>

              <div className="a-bottom-icon">
                <h1>
                  <Zoom>
                    <MdDoubleArrow />
                  </Zoom>
                </h1>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex justify-center items-center">
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

          <div className="grid grid-cols-2 md:min-h-[540px] mt-20 md:mt-0 md:p-10 relative">
            <div className="col-span-2 md:col-span-1  flex justify-center items-center">
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
            <div className="col-span-2 md:col-span-1 h-auto relative flex justify-evenly items-center mx-5">
              <div className="w-full flex flex-col justify-evenly bg-transparent items-center ">
                <Link to="#" className="a-skill">
                  <p>Researcher</p>
                </Link>
                <Link to="#" className="a-skill">
                  <p>Educator</p>
                </Link>
                <Link to="#" className="a-skill">
                  <p>Content Creator</p>
                </Link>
              </div>

              <div className="a-bottom-icon">
                <h1>
                  <MdDoubleArrow />
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:min-h-[540px] mt-20 md:mt-0 md:p-10 relative">
            <div className="col-span-2 order-last md:order-first md:col-span-1 h-auto relative flex justify-evenly items-center mx-5 bg-transparent">
              <div className="w-full flex flex-col justify-evenly bg-transparent items-center ">
                <Fade bottom cascade>
                  <div className="shape bg-transparent">
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
