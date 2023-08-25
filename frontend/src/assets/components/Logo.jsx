import React from "react";
import logo from "../../assets/images/logo.svg";
import { styled } from "styled-components";
const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="educator logo" />
      <p> Educator</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100px;
  }
  p {
    color: #3b82f6;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;
export default Logo;
