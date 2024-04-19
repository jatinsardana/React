import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./NavigateRouter/Dashboard";
import Landing from "./NavigateRouter/Landing";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const Appbar = () => {
  const navigate = useNavigate();

  return (
      <div className=" p-2 m-2 border border-black gap-2">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          LANDING PAGE............
        </button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          DASHBOARD
        </button>
      </div>
  );
};

export default App;
