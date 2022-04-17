import React from "react";
import contactMe from "../../Shared/Images/contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="relative">
      <nav className="c-header z-40">
        <h1 className="">
          <span className=" uppercase">Contact Me!</span>
        </h1>
      </nav>
      <div className="">
        <div className="grid grid-cols-2 c-contact z-50">
          <div className="col-span-1 p-8">
            <div class="p-6 flex flex-col justify-center">
              <div className="mb-5">
                <h1>
                  Drop Us a <span className="">Massage!</span>
                </h1>
              </div>
              <form className="z-50 bg-transparent">
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
          <div className="col-span-1 p-5">
            <img src={contactMe} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
