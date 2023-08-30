import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/Homework";
const Homework = () => {
  const [columns, setColumns] = useState(["columns 1"]);
  const [rows, setRows] = useState([]);
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <table>
            <thead>
              <tr className="header">
                <th scope="col">No</th>
                <th scope="col">Full Name</th>
                {columns.map((col, index) => (
                  <th scope="col" key={index}>
                    {col}
                  </th>
                ))}
                <th scope="col">
                  <button type="button" className="btn">
                    Add +
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homework;
