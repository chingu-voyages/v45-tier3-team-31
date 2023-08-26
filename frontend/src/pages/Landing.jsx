import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            student <span>management</span> app
          </h1>
          <p>
            Helps educators manage data, maximize student success. This
            easy-to-use system handles attendance and learning performance
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        <img src={main} alt="classroom" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
