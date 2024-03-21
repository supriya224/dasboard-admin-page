import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/admin-dashboard/main");
  });
  return (
    <div className=" h-[100vh] w-full">
      <Routes>
        <Route path="/admin-dashboard/:category" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
