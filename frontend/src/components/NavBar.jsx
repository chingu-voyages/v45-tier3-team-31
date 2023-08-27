import React from "react";
import Wrapper from "../assets/wrappers/NavBar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
const NavBar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button"></button>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
