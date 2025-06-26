"use client";
import React from "react";
import Navbar from "./Navbar";

// import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <div className="header flex flex-col items-center justify-between bg-gfredlight text-gfblack">
      <h1 className="font-godfather text-3xl md:text-4xl lg:text-6xl pt-6 md:pt-8 lg:pt-10 tracking-wide drop-shadow-white-sm">
        Ableism is a Desecration of the Sacred
      </h1>

      {/* <Hamburger /> */}

      <Navbar />
    </div>
  );
};

export default Header;
