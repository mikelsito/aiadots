import React from "react";

const Header = () => {
  return (
    <div className="header flex flex-col items-center justify-between bg-gfred text-gfblack">
      <h1 className="font-godfather text-8xl pt-12">
        Ableism is a Desecration of the Sacred
      </h1>
      <ul className="p-12">
        <a href="/" className="hover:underline">
          Home
        </a>{" "}
        |{" "}
        <a href="films" className="hover:underline">
          Films
        </a>{" "}
        |{" "}
        <a href="resources" className="hover:underline">
          Resources
        </a>
      </ul>
    </div>
  );
};

export default Header;
