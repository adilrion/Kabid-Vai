import React from "react";

const blog = [
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
  { title: "", des: "", writer: "", img: "" },
];

const RecentBlog = () => {
  return (
    <section className="mx-2">
      <header className="border-b py-2 mt-3">
        <h3 className="text-gray-700">Recent post</h3>
      </header>

      <article className="mt-4">
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
