import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./Blog.css";

const ReadPage = () => {
  const { title, img, des, id } = useLocation().state.data;
  // console.log(id);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ReadPage;
