import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SmallSideBar";
import { FaTimes } from "react-icons/fa";
import { toggleSideBar } from "../features/users/userSlice";
import Logo from "./Logo";
const SmallSideBar = () => {
  const { isSideBarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => dispatch(toggleSideBar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
