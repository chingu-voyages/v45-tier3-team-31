import React from "react";
import Wrapper from "../assets/wrappers/Student";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getSingleStudent } from "../features/class/classSlice";
const Student = ({ student, rowIndex }) => {
  const dispatch = useDispatch();

  const studentId = student.id;
  const singleStudent = student;
  const handleEdit = () => {
    dispatch(getSingleStudent(studentId));
  };

  return (
    <Wrapper>
      <td>{rowIndex + 1}</td>
      {Object.keys(singleStudent).map((key, index) => {
        if (key !== "id") {
          return <td key={index}>{singleStudent[key]}</td>;
        }
      })}
      <button type="button" className="edit-btn btn" onClick={handleEdit}>
        <BsPencilSquare />
      </button>
    </Wrapper>
  );
};

export default Student;
