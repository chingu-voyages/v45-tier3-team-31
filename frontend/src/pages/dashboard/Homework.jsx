import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/Table";
import { useSelector } from "react-redux";
const Homework = () => {
  const { students } = useSelector((store) => store.class);
  const { criteria, studentGrade } = useSelector((store) => store.homework);

  const criteriaName = criteria.map((criterion) => criterion["criteria_name"]);
  const [columns, setColumns] = useState(criteriaName || []);
  const initialRows = students.map((student) => {
    let row = [student["full_name"]];
    criteria.map((criterion) => {
      row.push("");
      studentGrade.map((grade) => {
        if (
          grade.criteria_id === criterion.id &&
          grade.student_id === student.id
        ) {
          row.pop();
          return row.push(grade.note);
        }
      });
    });
    return row;
  });
const handleRowChange = (value,rowIndex,colIndex) => { 
  setRows(prevRows => prevRows.map((row,rowId)=> rowId===rowIndex?row.map((col,colId)=> colId===colIndex-1?value:col):row))
 }
  const [rows, setRows] = useState(initialRows || []);
  return (
    <Wrapper>
      {JSON.stringify(rows)}
      <div className="row">
        <div className="col">
          <table className="form">
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
                  <td style={{ border: "transparent" }}>{rowIndex + 1}</td>
                  {row.map((col, colIndex) => {
                    if (colIndex === 0) {
                      return (
                        <td style={{ border: "transparent" }} key={colIndex}>
                          {col}
                        </td>
                      );
                    }
                    return (
                      <td style={{ border: "transparent" }} key={colIndex}>
                        <input className="form-input" type="text" value={col} onchange={(e)=>handleRowChange(e.target.value,rowIndex,colIndex)} />{" "}
                      </td>
                    );
                  })}
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
