import React, { children } from "react";
import Navbar from "../components/Navbar";

const Layouts = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layouts;
