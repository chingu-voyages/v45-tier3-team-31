import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/Homework";
import { useSelector } from "react-redux";
const Homework = () => {
  const { students } = useSelector((store) => store.class);
  const [columns, setColumns] = useState(["columns 1"]);

  const studentNames = students.map((student) =>
    Object.keys(student)
      .filter((key) => key === "full_name")
      .map((key) => student[key])
  );
  const [rows, setRows] = useState(studentNames);
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          {JSON.stringify(rows)}
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
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{rowIndex + 1}</td>
                  <td>{row[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homework;
