import React from "react";
import Wrapper from "../assets/wrappers/AddClass";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import FormRow from "./FormRow";
import {
  handleAddClassInput,
  closeAddClass,
  addNewClass,
  updateClass,
} from "../features/allClass/allClassSlice";
import FormSelect from "./FormSelect";
import moment from "moment/moment";
import { toast } from "react-toastify";
const AddClass = () => {
  const {
    isAddClassOpen,
    statusOptions,
    name,
    status,
    editClassId,
    courseName,
    isEdit,
    createdDate,
  } = useSelector((store) => store.allClasses);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(
      handleAddClassInput({ name: e.target.name, value: e.target.value })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !status || !createdDate) {
      return toast.error("Please fill all fields");
    }
    if (!isEdit) {
      return dispatch(addNewClass({ name, status, date: createdDate }));
    }
    if (!editClassId) {
      return toast.error("No class Id to update");
    }
    return dispatch(
      updateClass({ editClassId, aClass: { name, status, date: createdDate } })
    );
  };

  return (
    <Wrapper>
      <div
        className={
          isAddClassOpen ? "modal-overlay show-modal" : "modal-overlay"
        }
      >
        <form className="form">
          <h5>
            <span>{isEdit ? "Edit" : "New"}</span> Class Info
          </h5>
          {/* <div className="form-center"> */}
          <FormRow
            value={name}
            name="name"
            type="text"
            handleChange={handleChange}
          />
          <FormRow
            value={createdDate}
            name="createdDate"
            labelText="created date"
            type="date"
            handleChange={handleChange}
          />
          {/* <FormRow
            value={courseName}
            name="courseName"
            labelText="course name"
            type="text"
            handleChange={handleChange}
          /> */}
          <FormSelect
            name="status"
            list={statusOptions}
            value={status}
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

          <button
            type="submit"
            className="btn-block btn"
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddClass;
