import React, { useState } from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import FormRow from "./FormRow";
const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");
  return (
    <Wrapper>
      <div className="form">
        <button type="button" className="btn add-btn">
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
