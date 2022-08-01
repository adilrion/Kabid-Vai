import React, { useState } from "react";
import "./Utils.css";
import { BiSearchAlt2 } from "react-icons/bi";

const SrcBar = ({ post, setSrcResult, placeholder }) => {
  const HandleOnSubmit = (e) => {
    e.preventDefault();
  };

  const HandleOnChange = (e) => {
    if (!e.target.value) {
      return setSrcResult(post);
    } else {
      const srcResult = post.filter((post) =>
        post?.title?.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSrcResult(srcResult);
    }
  };

  return (
    <div>
      <form onSubmit={HandleOnSubmit}>
        <div className="b-search-box shadow">
          <input
            className="b-search-input"
            type="text"
            defaultValue=""
            placeholder={placeholder}
            onChange={HandleOnChange}
          />
          <button className="b-search-btn">
            <p className="fa-search">
              <BiSearchAlt2 />
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SrcBar;
