import React from "react";
import { Link } from "react-router-dom";
import SrcBar from "../Utils/SrcBar";
import "./Blog.css";

const blog = [
  {
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    des: `dolor sit amet consectetur adipisicing elit. Nostrum,
  ex.Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Omnis, maiores Lorem ipsum dolor sit amet. this is
  the best    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis voluptatem quo repellat at. Nihil odio deleniti aliquid quis molestias explicabo, provident modi voluptatibus! Libero maxime voluptas ullam, ab eveniet nesciunt aliquam deserunt repudiandae soluta at velit doloremque tempore esse vitae beatae atque hic quasi, et temporibus ratione pariatur quam fuga. Laudantium a omnis porro temporibus minus, voluptates maxime labore quaerat asperiores nam quisquam corporis ipsa eaque. Odio molestiae labore possimus illo ipsum dolore ducimus nulla, ut, quod quisquam et tenetur tempore veritatis facere. Unde, recusandae sit! Sequi eos deserunt nobis quia saepe suscipit laudantium pariatur fugit. Quos, odit eveniet. dolor sit amet consectetur adipisicing elit. Nostrum,
  ex.Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Omnis, maiores Lorem ipsum dolor sit amet. this is
  the best    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis voluptatem quo repellat at. Nihil odio deleniti aliquid quis molestias explicabo, provident modi voluptatibus! Libero maxime voluptas ullam, ab eveniet nesciunt aliquam deserunt repudiandae soluta at velit doloremque tempore esse vitae beatae atque hic quasi, et temporibus ratione pariatur quam fuga. Laudantium a omnis porro temporibus minus, voluptates maxime labore quaerat asperiores nam quisquam corporis ipsa eaque. Odio molestiae labore possimus illo ipsum dolore ducimus nulla, ut, quod quisquam et tenetur tempore veritatis facere. Unde, recusandae sit! Sequi eos deserunt nobis quia saepe suscipit laudantium pariatur fugit. Quos, odit eveniet. dolor sit amet consectetur adipisicing elit. Nostrum,
  ex.Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Omnis, maiores Lorem ipsum dolor sit amet. this is
  the best    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis voluptatem quo repellat at. Nihil odio deleniti aliquid quis molestias explicabo, provident modi voluptatibus! Libero maxime voluptas ullam, ab eveniet nesciunt aliquam deserunt repudiandae soluta at velit doloremque tempore esse vitae beatae atque hic quasi, et temporibus ratione pariatur quam fuga. Laudantium a omnis porro temporibus minus, voluptates maxime labore quaerat asperiores nam quisquam corporis ipsa eaque. Odio molestiae labore possimus illo ipsum dolore ducimus nulla, ut, quod quisquam et tenetur tempore veritatis facere. Unde, recusandae sit! Sequi eos deserunt nobis quia saepe suscipit laudantium pariatur fugit. Quos, odit eveniet.`,
    writer: "Uganda Nibashi",
    img: "https://images.unsplash.com/photo-1609685198105-d67e7a970497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    id: 1,
  },
  {
    title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    des: `dolor sit amet consectetur adipisicing elit. Nostrum,
  ex.Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Omnis, maiores Lorem ipsum dolor sit amet. this is
  the best    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis voluptatem quo repellat at. Nihil odio deleniti aliquid quis molestias explicabo, provident modi voluptatibus! Libero maxime voluptas ullam, ab eveniet nesciunt aliquam deserunt repudiandae soluta at velit doloremque tempore esse vitae beatae atque hic quasi, et temporibus ratione pariatur quam fuga. Laudantium a omnis porro temporibus minus, voluptates maxime labore quaerat asperiores nam quisquam corporis ipsa eaque. Odio molestiae labore possimus illo ipsum dolore ducimus nulla, ut, quod quisquam et tenetur tempore veritatis facere. Unde, recusandae sit! Sequi eos deserunt nobis quia saepe suscipit laudantium pariatur fugit. Quos, odit eveniet.`,
    writer: "japan Nibashi",
    img: "https://images.unsplash.com/photo-1609685198105-d67e7a970497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    id: 7,
  },
  {
    title: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    des: `dolor sit amet consectetur adipisicing elit. Nostrum,
  ex.Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Omnis, maiores Lorem ipsum dolor sit amet. this is
  the best    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perspiciatis voluptatem quo repellat at. Nihil odio deleniti aliquid quis molestias explicabo, provident modi voluptatibus! Libero maxime voluptas ullam, ab eveniet nesciunt aliquam deserunt repudiandae soluta at velit doloremque tempore esse vitae beatae atque hic quasi, et temporibus ratione pariatur quam fuga. Laudantium a omnis porro temporibus minus, voluptates maxime labore quaerat asperiores nam quisquam corporis ipsa eaque. Odio molestiae labore possimus illo ipsum dolore ducimus nulla, ut, quod quisquam et tenetur tempore veritatis facere. Unde, recusandae sit! Sequi eos deserunt nobis quia saepe suscipit laudantium pariatur fugit. Quos, odit eveniet.`,
    writer: "fucking Nibashi",
    img: "https://images.unsplash.com/photo-1609685198105-d67e7a970497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    id: 8,
  },
  { title: "", des: "", writer: "", img: "", id: 2 },
  { title: "", des: "", writer: "", img: "", id: 3 },
  { title: "", des: "", writer: "", img: "", id: 4 },
  { title: "", des: "", writer: "", img: "", id: 5 },
  { title: "", des: "", writer: "", img: "", id: 6 },
];

const RecentBlog = () => {
  return (
    <section className="relative">
      <div className="px-2 sticky top-0 r-header">
        <div className="src-bar">
          <SrcBar />
        </div>
        <header className="border-b py-2 mt-2">
          <h3 className="text-gray-700">Recent post</h3>
        </header>
      </div>

      <article className="mt-4 mx-2 overflow-y-auto h-screen">
        {blog.map((data) => {
          return (
            <div className="shadow rounded mb-4">
              <div className="w-full max-h-[200px] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="images"
                  className="h-[100%] w-full object-fill rounded-t"
                />
              </div>
              <div className="p-2">
                <h3 className="text-gray-700">Lorem ipsum dolor sit amet.</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Provident, sed.
                  <Link
                    to={`/read/${data.id}`}
                    state={{ data }}
                    className="ml-1 font-extralight text-gray-500 text-sm hover:underline hover:text-[#5da0de]"
                  >
                    ...Read more
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default RecentBlog;
