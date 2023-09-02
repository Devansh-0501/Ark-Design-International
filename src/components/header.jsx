import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import img from "../Assets/5.avif";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <nav>
        <div className="leftSection">
          <img className="logo" src={img} alt="no" />
          <Link to={"/"}>Ark Design International</Link>
        </div>
        <div className="rightSection">
          <HashLink to={"/#Home"}>Home</HashLink>
          <HashLink to={"/#Projects"}>Projects</HashLink>
          <HashLink to={"/#Career"}>Career</HashLink>
          <Link to={"/Contact"}>Contact</Link>
          <HashLink to={"/#AboutUs"}>About Us</HashLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
