import React from "react";
import Wrapper from "../assets/wrappers/Class";
const Class = ({ name, course, status }) => {
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <h5>{name}</h5>
          <p>{course}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <div className={`status ${status}`}>{status}</div>
        </div>

        <footer>
          <div className="actions">
            <button type="button" className="btn edit-btn">
              Edit
            </button>
            <button type="button" className="btn delete-btn">
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Class;
