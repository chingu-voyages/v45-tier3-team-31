import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {
  Attendance,
  Classes,
  Homework,
  Landing,
  ProtectedRoute,
  Register,
  ShareLayout,
} from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ShareLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Classes />} />
          <Route path="students" element={<Attendance />} />
          <Route path="homework" element={<Homework />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        transition={Slide}
      />
    </BrowserRouter>
  );
}

export default App;
