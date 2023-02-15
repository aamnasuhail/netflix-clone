import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/TVshows">TV SHOWS</Link>
      <Link to="/Movies">MOVIES</Link>
      <Link to="/Radio">RADIO</Link>
      <Link to="/Music">MUSIC</Link>
    </nav>
  );
};

export default Navbar;
