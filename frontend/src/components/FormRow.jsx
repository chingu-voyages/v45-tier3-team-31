import React from "react";

const FormRow = ({ name, labelText, type, value, handleChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={handleChange}
        value={value}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
