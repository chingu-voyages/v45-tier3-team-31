import React from "react";
import Wrapper from "../assets/wrappers/AddClass";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import FormRow from "./FormRow";
import {handleAddClassInput, closeAddClass } from "../features/allClass/allClassSlice";
import FormSelect from "./FormSelect";
const AddClass = () => {
  const {
    isAddClassOpen,
    statusOptions,
    name,
    status,
    courseName,
    createdDate,
  } = useSelector((store) => store.allClasses);
  const dispatch = useDispatch();
  const handleChange = (e) => { 
    dispatch(handleAddClassInput({name:e.target.name,value:e.target.value}))
   }
  return (
    <Wrapper>
      <div
        className={
          isAddClassOpen ? "modal-overlay show-modal" : "modal-overlay"
        }
      >
        <form className="form">
          <h5>Class Info</h5>
          {/* <div className="form-center"> */}
          <FormRow value={name} name="name" type="text" handleChange={handleChange} />
          <FormRow
            value={createdDate.getFullDate}
            name="createdDate"
            labelText="created date"
            type="date"
            handleChange={handleChange}
          />
          <FormRow
            value={courseName}
            name="courseName"
            labelText="course name"
            type="text"
            handleChange={handleChange}
          />
          <FormSelect name="status" list={statusOptions} value={status}
          handleChange={handleChange}
          />
          {/* </div> */}
          <button
            type="button"
            className="close-modal-btn"
            onClick={() => dispatch(closeAddClass())}
          >
            <FaTimes />{" "}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddClass;
