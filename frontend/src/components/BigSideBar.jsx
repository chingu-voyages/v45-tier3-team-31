import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/BigSideBar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { toggleSideBar } from "../features/users/userSlice";

const BigSideBar = () => {
  const { isSideBarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div
        className={
          isSideBarOpen ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks toggleSideBar={() => dispatch(toggleSideBar())} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
