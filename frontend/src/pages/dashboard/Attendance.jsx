import { useState } from "react";
import Wrapper from "../../assets/wrappers/Attendance";
import { useSelector } from "react-redux";
import { capitalizeSentence } from "../../utils/methods";

const Attendance = () => {
  const { students } = useSelector((store) => store.class);

  const columns = Object.keys(students?.[0]).filter((key) => key !== "id");

  const rows = students.map((student, index) =>
    Object.keys(student)
      .filter((key) => key !== "id")
      .map((key) => student[key])
  );

  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <table>
            <thead>
              <tr className="header">
                <th scope="col">No</th>

                {columns.map((col, index) => (
                  <th scope="col" key={index}>
                    {capitalizeSentence(col)}
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
              {rows.map((row, rowIndex) => {
                console.log();
                return (
                  <tr key={rowIndex}>
                    <td>{rowIndex + 1}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Attendance;
