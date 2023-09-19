import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/ClassesContainer";
import Class from "./Class";
import { useEffect } from "react";
import { getAllClass } from "../features/allClass/allClassSlice";
import Loading from "./Loading";
const ClassesContainer = () => {
  const { classes, search, isLoading } = useSelector(
    (store) => store.allClasses
  );

  const dispatch = useDispatch();
  // get all Classes
  useEffect(() => {
    dispatch(getAllClass());
  }, [search]);
  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }
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
