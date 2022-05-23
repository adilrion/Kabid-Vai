import React from "react";
import { useLocation } from "react-router-dom";

const ReadPage = () => {
  const location = useLocation();
  const { title, img, des } = location.state.data;
  console.log(title);
  console.log(location);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default ReadPage;
