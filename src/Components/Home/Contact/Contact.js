import React from "react";
import contactMe from "../../Shared/Images/contact.png";
import contactMe2 from "../../Shared/Images/contact-2.png";
import { TiArrowForward } from "react-icons/ti";
import { ImLocation2, ImPhone, ImMail3 } from "react-icons/im";
import { BsFacebook, BsGithub, BsInstagram, BsPinterest } from "react-icons/bs";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="relative">
      <nav className="c-header z-40">
        <h1 className="">
          <span className=" uppercase">Contact Me!</span>
        </h1>
      </nav>

      <div className="c-contact">
        <div className="c-header-details">
          <div className="md:w-[600px] py-5 border-gray-400 border-b">
            <h1>DON'T BE SHY</h1>
            <p>
              Feel free to get in touch with me, i'm always open to discussing
              new projects creative ideas or opportunities to be part of your
              vision
            </p>
          </div>
        </div>
        <div className="relative grid md:grid-cols-2 items-center justify-center  z-40">
          <div className="col-span-1 order-last md:order-first p-5">
            <div class="md:p-6 flex flex-col justify-center">
              <div className="mb-5 text-3xl">
                <p>
                  Drop Us a <span className="">Massage!</span>
                </p>
              </div>
              <form className="z-40 bg-transparent">
                <div class="flex flex-col">
                  <label for="name" class="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="w-100 mt-2 py-2 px-3 rounded    c-shadow min-h-full text-gray-800 focus:outline-none bg-transparent"
                  />
                </div>

                <div class="flex flex-col mt-2">
                  <label for="email" class="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="w-100 mt-2 py-2 px-3 rounded    c-shadow min-h-full text-gray-800 focus:outline-none bg-transparent"
                  />
                </div>

                <div class="flex flex-col mt-2">
                  <label for="tel" class="hidden">
                    Text
                  </label>
                  <textarea
                    type="text"
                    name="tel"
                    id="tel"
                    placeholder="Type your message"
                    class="w-100 mt-2 py-2 px-3 min-h-[200px] rounded    c-shadow min-h-full text-gray-800 focus:outline-none bg-transparent"
                  />
                </div>

                <button
                  type="submit"
                  class="w-full c-shadow  bg-[#808080] text-white font-bold py-3 px-6 rounded mt-3 hover:bg-[#5a5a5a]  transition ease-in-out duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="col-span-1  p-5">
            <img src={contactMe} width="100%" alt="" />
          </div>
          <div className="c-bottom-icon">
            <h1>
              <TiArrowForward />
            </h1>
            <p className="text-3xl">Or You Can Find Me</p>
          </div>
        </div>
        <div className="mt-32 md:mt-20">
          <div className="md:grid grid-cols-2 items-center justify-center  z-50">
            <div className="col-span-1 p-5">
              <img src={contactMe2} width="100%" alt="" />
            </div>
            <div className="col-span-1 p-5 z-40">
              <div class="md:p-6 flex flex-col justify-center c-address-section">
                <address className="c-address">
                  <p className="c-address-icon">
                    <ImLocation2 />
                  </p>
                  <p>
                    Box 564, Disneyland,
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </address>
                <div className="c-address">
                  <p className="c-address-icon">
                    <ImPhone />
                  </p>
                  <div>
                    <p>+88 0534684646</p>
                    <p>+00 8893513546</p>
                  </div>
                </div>
                <div className="c-address">
                  <p className="c-address-icon">
                    <ImMail3 />
                  </p>
                  <p>kabidhasan@gmail.com</p>
                </div>
                <div>
                  <div className="flex justify-evenly m-[15px]">
                    <Link
                      to="#"
                      className="text-2xl text-[#808080] bg p-2 hover:text-[#5a5a5a]  transition ease-in-out duration-300"
                    >
                      <BsGithub />
                    </Link>
                    <Link
                      to="#"
                      className=" text-2xl text-[#808080] bg p-2 hover:text-[#3b5998] transition ease-in-out duration-300"
                    >
                      <BsFacebook />
                    </Link>
                    <Link
                      to="#"
                      className="text-2xl text-[#808080] bg p-2 hover:text-[#bc2a8d] transition ease-in-out duration-300"
                    >
                      <BsInstagram />
                    </Link>
                    <Link
                      to="#"
                      className=" text-2xl text-[#808080] bg p-2 hover:text-[#c8232c] transition ease-in-out duration-300"
                    >
                      <BsPinterest />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
