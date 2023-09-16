import Wrapper from "../assets/wrappers/AddStudent";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import FormRow from "./FormRow";

import FormSelect from "./FormSelect";

import { toast } from "react-toastify";
import {
  addNewStudent,
  closeAddStudent,
  deleteStudent,
  handleAddStudentInput,
  updateStudent,
} from "../features/class/classSlice";
const AddStudent = () => {
  const {
    studentId,
    isEditStudent,
    full_name,
    address,
    attended_date,
    parent_phone_number,
    isAddStudentOpen,
  } = useSelector((store) => store.classes);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(
      handleAddStudentInput({ name: e.target.name, value: e.target.value })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!full_name || !address || !attended_date || parent_phone_number) {
      return toast.error("Please fill all fields");
    }
    if (!isEditStudent) {
      return dispatch(
        addNewStudent({
          full_name,
          address,
          attended_date,
          parent_phone_number,
        })
      );
    }
    if (!isEditStudent) {
      return toast.error("No student Id to update");
    }
    return dispatch(
      updateStudent({
        studentId,
        aClass: { full_name, address, attended_date, parent_phone_number },
      })
    );
  };

  return (
    <Wrapper>
      <div
        className={
          isAddStudentOpen ? "modal-overlay show-modal" : "modal-overlay"
        }
      >
        <form className="form">
          <h5>
            <span>{isEditStudent ? "Edit" : "New"}</span> Student Info
          </h5>
          {/* <div className="form-center"> */}
          <FormRow
            value={full_name}
            name="full_name"
            labelText={"full name"}
            type="text"
            handleChange={handleChange}
          />
          <FormRow
            value={parent_phone_number}
            name="parent_phone_number"
            labelText={"parent phone number"}
            type="number"
            handleChange={handleChange}
          />
          <FormRow
            value={address}
            name="address"
            type="text"
            handleChange={handleChange}
          />
          <FormRow
            value={attended_date}
            name="attended_date"
            labelText="attended date"
            type="date"
            handleChange={handleChange}
          />

          {/* <FormSelect
            name="status"
            list={statusOptions}
            value={status}
            handleChange={handleChange}
          /> */}
          {/* </div> */}
          <button
            type="button"
            className="close-modal-btn"
            onClick={() => dispatch(closeAddStudent())}
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
          <button
            type="submit"
            className="btn-block btn"
            onClick={() => dispatch(deleteStudent(studentId))}
          >
            Save
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddStudent;
