import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Landing, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
