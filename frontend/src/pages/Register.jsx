import React, { useEffect } from "react";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/users/userSlice";
import { useNavigate } from "react-router";
const Register = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);
  const [values, setValues] = useState(initialState);
  const { name, email, password, isMember } = values;
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  const handleSubmit = (e) => {
    if (isMember) {
      return dispatch(loginUser({ email, password }));
    }
    return dispatch(registerUser({ email, password, name }));
  };
  //Programmatically redirect to dashboard
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
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
          {isLoading ? "submitting..." : "submit"}
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch(
              loginUser({ email: "demoteacher@gmail.com", password: "123456" })
            )
          }
          className="btn btn-block"
        >
          {isLoading ? "demo..." : "demo"}
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
