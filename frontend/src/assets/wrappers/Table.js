import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  overflow-x: auto;
  .form {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
  }
  .header {
    background-color: var(--primary-500);
    color: var(--primary-50);
  }

  table {
    position: relative;
  }
  .edit-btn {
    position: absolute;
    left: 0;

    top: 0;
    transform: translateX(-100%) scale(0);
    transition: var(--transition);
  }
  tr:hover .edit-btn {
    transform: translateX(-100%) scale(1);
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
  .form-input {
    margin: 0;
    background: transparent;
    outline: var(--primary-500);
    text-align: center;
    border-width: 1px;
    height: 100%;
  }
`;
export default Wrapper;
