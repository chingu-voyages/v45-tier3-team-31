import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    overflow-x: auto;
    width: 100%;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);
  }
  .header {
    background-color: var(--primary-500);
    color: var(--primary-50);
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
