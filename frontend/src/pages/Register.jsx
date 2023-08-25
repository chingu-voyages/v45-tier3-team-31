import React from "react";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../assets/components";
import { useState } from "react";
const Register = () => {
  const [values, setValues] = useState(initialState);
  const { name, email, password, isMember } = values;
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {};

  return (
    <Wrapper className="full-pages">
      <div className="form">
        <Logo />
        <h3>{isMember ? "login" : "register"}</h3>
        {!isMember && (
          <FormRow
            name="name"
            value={name}
            type="text"
            handleChange={handleChange}
          />
        )}

        <FormRow
          name="email"
          value={email}
          type="email"
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          value={password}
          type="password"
          handleChange={handleChange}
        />
        <button type="button" onClick={handleSubmit} className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not a user yet?" : "Already a user?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {isMember ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </Wrapper>
  );
};

export default Register;
