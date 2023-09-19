import { styled } from "styled-components";

const Wrapper = styled.div`
  .form {
    width: 100%;
    max-width: 100%;
    position: relative;
  }
  .add-btn {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
  }

  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  h4 {
    font-weight: 700;
  }

  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default Wrapper;
