import React from "react";
import Navbar from "./Navbar";
import logo from "../nextflixlogo.png";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <Navbar />
      <ImSearch />
    </header>
  );
};

export default Header;
