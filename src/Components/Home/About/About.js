import React from "react";
import img from "../../Shared/Images/Kabid.jpg";
const About = () => {
  return (
    <article>
      <section className="">
        <nav className="flex justify-center bg-white m-2  rounded">
          <h1 className=" py-3 text-[50px]">
            <span className="text-[#fbb300] ">WOW!</span> a Whole page just
            about me
          </h1>
        </nav>
        <div className="grid grid-cols-3 m-2 p-20 bg-white">
          <div className="col-span-2 row-span-1">
            <h1 className="border-b-4 w-fit mb-10 pb-2 border-gray-700">
              Me talking about my self
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              maiores alias quis neque eius esse repellat sed cumque? Illo ipsa
              earum amet sequi, excepturi, ratione facilis error, eius
              voluptatem dolorum sint molestias quod rem? Magnam, eos totam
              assumenda odit veniam quasi illum a excepturi earum quae expedita
              ullam deserunt, non dolores voluptatibus dolor voluptates dolorem
              unde, incidunt dolorum nisi quod maiores! Repellat ad sint
              voluptates, itaque ut consequuntur. Cumque dolorum perspiciatis
              tenetur magni repellat similique, blanditiis architecto possimus,
              omnis quae delectus sequi aut sunt maiores quibusdam, molestiae
              est debitis vel eligendi amet? Possimus maxime debitis quos
              asperiores natus dolorum magni?
            </p>
          </div>
          <div className="col-span-1 row-span-1 px-10">
            <img src={img} alt="" width="100%" className="border rounded" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 m-2 mt-10 gap-10">
            <div className="col-span-1 row-span-1 p-4 bg-[#399953]">
              <h1>Im a Designer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                earum exercitationem voluptate, asperiores itaque accusantium
                quos repellendus aliquam recusandae porro. Ducimus possimus ad
                ipsam inventore, ab laudantium nobis eaque similique. Voluptate,
                blanditiis. Molestiae laudantium nostrum consequuntur labore
                porro, maxime perferendis exercitationem, optio totam quibusdam
                molestias eveniet earum velit mollitia eos.
              </p>
            </div>
            <div className="col-span-1 row-span-1 p-4 bg-[#d53e33]">
              <h1>Im also do some Coding</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                earum exercitationem voluptate, asperiores itaque accusantium
                quos repellendus aliquam recusandae porro. Ducimus possimus ad
                ipsam inventore, ab laudantium nobis eaque similique. Voluptate,
                blanditiis. Molestiae laudantium nostrum consequuntur labore
                porro, maxime perferendis exercitationem, optio totam quibusdam
                molestias eveniet earum velit mollitia eos.
              </p>
            </div>
            <div className="col-span-1 row-span-1 p-4 bg-[#fbb300]">
              <h1>Im also do some Artists</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                earum exercitationem voluptate, asperiores itaque accusantium
                quos repellendus aliquam recusandae porro. Ducimus possimus ad
                ipsam inventore, ab laudantium nobis eaque similique. Voluptate,
                blanditiis. Molestiae laudantium nostrum consequuntur labore
                porro, maxime perferendis exercitationem, optio totam quibusdam
                molestias eveniet earum velit mollitia eos.
              </p>
            </div>
            <div className="col-span-1 row-span-1">
              <h1>Im also do some Writing</h1>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
