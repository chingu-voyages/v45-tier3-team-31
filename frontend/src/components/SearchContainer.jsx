import React, { useState } from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import FormRow from "./FormRow";
import { useDispatch } from "react-redux";
import {
  handleClassesFilterInput,
  showAddClass,
} from "../features/allClass/allClassSlice";
import { useEffect } from "react";
const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");
  const dispatch = useDispatch();
  //debounce search
  useEffect(() => {
    const timeId = setTimeout(() => {
      dispatch(
        handleClassesFilterInput({ name: "search", value: localSearch })
      );
    }, 500);
    return () => clearTimeout(timeId);
  }, [localSearch]);
  return (
    <Wrapper>
      <div className="form">
        <button
          type="button"
          className="btn add-btn"
          onClick={() => dispatch(showAddClass())}
        >
          Add Class
        </button>
        <h4>search class</h4>
        {/* <div className="form-center"> */}
        <FormRow
          //   name="search"
          type="text"
          value={localSearch}
          handleChange={(e) => setLocalSearch(e.target.value)}
        />
        {/* </div> */}
      </div>
    </Wrapper>
  );
};

export default SearchContainer;
