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
          <Route path="attendance" element={<Attendance />} />
          <Route path="homework" element={<Homework />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
