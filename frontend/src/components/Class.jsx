import React from "react";
import Wrapper from "../assets/wrappers/Class";
import { FaCalendarAlt } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import ClassDetail from "./ClassDetail";
import { deleteClass, showEditClass } from "../features/allClass/allClassSlice";
const Class = ({ name, status, date, students, id }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <h5>{name}</h5>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <ClassDetail icon={<FaCalendarAlt />} text={date} />
          <ClassDetail
            icon={<PiStudent />}
            text={`${students.length} student${
              students.length > 1 ? "s" : ""
            } `}
          />
          <div className={`status ${status}`}>{status}</div>
        </div>

        <footer>
          <div className="actions">
            <button type="button" className="btn edit-btn">
              View
            </button>
            <button
              type="button"
              className="btn edit-btn"
              onClick={() =>
                dispatch(
                  showEditClass({
                    name,
                    editClassId: id,
                    status,
                    createdDate: date,
                  })
                )
              }
            >
              Edit
            </button>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => dispatch(deleteClass(id))}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Class;
