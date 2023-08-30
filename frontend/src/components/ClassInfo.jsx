import React from "react";
import Wrapper from "../assets/wrappers/ClassInfo";
import { useSelector } from "react-redux";

const ClassInfo = () => {
  const { name } = useSelector((store) => store.class);
  return (
    <Wrapper>
      <div className="form">
        <p>name: {name}</p>
      </div>
    </Wrapper>
  );
};

export default ClassInfo;
