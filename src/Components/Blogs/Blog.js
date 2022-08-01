import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getBlog } from "../Hooks/getApi";
import { pageTitle } from "../Utils/Title";
import "./Blog.css";
import RecentBlog from "./RecentBlog";
import Spinner from "../Utils/Spinner";
import moment from "moment";
import ReactPaginate from "react-paginate";
import SrcBar from "../Utils/SrcBar";

const Blog = () => {
  pageTitle("Blog");
  const slice = (data) => data?.slice(0, 250);

  const [post, setPost] = useState([]);
  const [srcResult, setSrcResult] = useState([]);

  const { data, isLoading, isError, error } = useQuery(["blog"], () =>
    getBlog()
  );
  useEffect(() => {
    setPost(data);
    setSrcResult(data);
  }, [data]);


  // Pagination Function

  const itemsPerPage = 5;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(srcResult?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(srcResult?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, srcResult]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % srcResult?.length;
    setItemOffset(newOffset);
  };

  if (isLoading) {
    return (
      <div className="absolute top-1/4 left-2/4 w-12 h-12 bg-gray-50 shadow rounded-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <span className="absolute min-h-screen top-2/4 left-2/4">
        There was an server site {error.message}
      </span>
    );
  }

  return (
    <section className="blog-section">
      <article>
        {/* Bottom Blog Section */}
        <section className="grid grid-cols-12 gap-5 sm:mx-2 mx-2">
          <section className="col-span-12 lg:col-span-8  pt-2">
            <div>
              {currentItems?.length !== -0 ? (
                currentItems?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="c-b-card grid grid-cols-1 md:grid-cols-2 shadow p-5 gap-5 bg-white rounded mb-5"
                    >
                      <div className="c-img col-span-1 rounded">
                        <img
                          src={data?.cover_img}
                          alt=""
                          className="rounded aspect-video object-center object-cover h-full w-full "
                        />
                      </div>
                      <div className="c-b-des col-span-1 flex flex-col justify-center ">
                        <div className="c-b-title flex flex-col  ">
                          <p className="text-[#292929] leading-8 mb-2 text-xl md:text-2xl font-semibold">
                            {data?.title}
                          </p>
                          <p className=" text-[#292929] text-lg ">
                            {slice(data?.excerpt) || `...`}
                            <Link
                              to={`/read/${data?._id}`}
                              // state={{ data: `${data?.title}` }}
                              className="ml-1 font-extralight text-gray-500 text-sm hover:underline hover:text-[#5da0de]"
                            >
                              ...Read more
                            </Link>
                          </p>

                          <div className="flex justify-between items-end">
                            <span className="text-xsm text-gray-500 inline-flex items-baseline gap-2">
                              <p>{moment(data?.createdAt).format("ll")}</p>{" "}
                              <span className="text-[10px]">
                                ({moment(data?.createdAt, "YYYYMMDD").fromNow()}
                                )
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <article className="m-2 w-screen text-gray-500">
                  {" "}
                  <p>Result not found:</p>
                </article>
              )}
            </div>
            <div className="flex items-center   justify-center py-10 lg:px-0 sm:px-6 px-4">
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                containerClassName="b-page flex items-center gap-3 border-t border-gray-300"
                pageClassName="b-page text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#019871] px-3 pt-3 border-t border-transparent hover:border-[#019871]"
                pageLinkClassName="b-page "
                activeClassName="border-t border-transparent border-[#019871]"
                previousClassName="b-previous text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#019871] pt-3 pr-2"
                nextClassName="b-next text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#019871] pt-3 pl-3"
                disabledClassName=" text-gray-400 hover:text-gray-400"
              />
            </div>
          </section>
          <aside className=" col-span-12 lg:col-span-4 w-full">
            <div className="mx-5 md:mx-0 ">
              <div className="px-2 sticky top-0 r-header z-40 pt-2">
                <div className="src-bar">
                  <SrcBar
                    post={post}
                    setSrcResult={setSrcResult}
                    placeholder="Search blog .."
                  />
                </div>
                <header className="border-b py-2 mt-2">
                  <h3 className="text-gray-700">Recent post</h3>
                </header>
              </div>
              <div>
                <RecentBlog />
              </div>
            </div>
          </aside>
        </section>
        {/* End Bottom Blog Section */}
      </article>
    </section>
  );
};

export default Blog;
