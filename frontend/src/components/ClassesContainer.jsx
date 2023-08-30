import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ClassesContainer";
import Class from "./Class";
const ClassesContainer = () => {
  const { classes } = useSelector((store) => store.allClasses);
  if (classes.length === 0) {
    return (
      <Wrapper>
        <h2>No Classes to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {classes.length} class{classes.length > 1 ? "es" : ""} found
      </h5>
      <div className="classes">
        {classes.map((items, index) => (
          <Class key={index} {...items} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ClassesContainer;
