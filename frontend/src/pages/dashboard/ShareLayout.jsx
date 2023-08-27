import { Outlet } from "react-router";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { BigSideBar, NavBar, SmallSideBar } from "../../components";
const ShareLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />

        <div>
          <div className="dashboard-page">
            <NavBar />
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default ShareLayout;
