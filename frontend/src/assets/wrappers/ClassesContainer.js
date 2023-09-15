import { styled } from "styled-components";

const Wrapper = styled.section`
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .classes {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .classes {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
export default Wrapper;
