import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  .form {
    width: 100%;
    max-width: 100%;
  }
  .header {
    background-color: var(--primary-500);
    color: var(--primary-50);
  }
  table {
    overflow-x: auto;
  }
  th {
    border-radius: var(--borderRadius);
  }
  td {
    text-align: center;
    color: var(--textColor);
    border: 0.1rem solid var(--primary-50);
    border-radius: var(--borderRadius);
  }
  tr {
  }
`;
export default Wrapper;
