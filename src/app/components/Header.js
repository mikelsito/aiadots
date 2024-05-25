import React from "react";

const Header = () => {
  return (
    <div className="header flex flex-col items-center justify-between bg-gfredlight text-gfblack">
      <h1 className="font-godfather text-6xl pt-12 tracking-wide drop-shadow-white-sm">
        Ableism is a Desecration of the Sacred
      </h1>
      <ul className="pt-12 pb-6 text-xl font-normal text-gfblack">
        <a href="/" className="hover:drop-shadow-white-sm">
          Home
        </a>{" "}
        |{" "}
        <a href="films" className="hover:drop-shadow-white-sm">
          Films
        </a>{" "}
        |{" "}
        <a href="resources" className="hover:drop-shadow-white-sm">
          Resources
        </a>
      </ul>
    </div>
  );
};

export default Header;
