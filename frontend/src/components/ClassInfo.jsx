import React from "react";
import Wrapper from "../assets/wrappers/ClassInfo";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "./FormRow";
import { showAddStudent } from "../features/class/classSlice";

const ClassInfo = () => {
  const { name, students } = useSelector((store) => store.class);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="form">
        <div className="form-center">
          <h4>Class Name:{name}</h4>
          <h4>Students:{students.length}</h4>
        </div>

        {/* <FormRow name="class name" value={name} /> */}
        <button
          type="button"
          className="btn add-btn"
          onClick={() => dispatch(showAddStudent())}
        >
          New Student
        </button>
      </div>
    </Wrapper>
  );
};

export default ClassInfo;
