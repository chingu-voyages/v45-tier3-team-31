import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/Table";
import { capitalizeSentence } from "../utils/methods";

import { useEffect } from "react";
import { getSingleClass } from "../features/class/classSlice";
const AttendanceTable = () => {
  const dispatch = useDispatch();
  const { students, editClassId } = useSelector((store) => store.class);

  // Get Class Info and students
  useEffect(() => {
    if (editClassId) {
      dispatch(getSingleClass(editClassId));
    }
  }, [editClassId]);

  if (students.length === 0) {
    return (
      <Wrapper>
        <h2>No students to display...</h2>
      </Wrapper>
    );
  }
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
          <table className="form">
            <thead>
              <tr className="header">
                <th scope="col">No</th>

                {columns.map((col, index) => (
                  <th scope="col" key={index}>
                    {capitalizeSentence(col)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => {
                console.log();
                return (
                  <tr key={rowIndex}>
                    <td>{rowIndex + 1}</td>
                    {row.map((col, colId) => (
                      <td key={colId}>{col}</td>
                    ))}
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
export default AttendanceTable;
