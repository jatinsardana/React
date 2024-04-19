import React from "react";
import Landing from "./LinkedINlading/Landing";
import Dashboard from "./LinkedINlading/Dashboard";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Practice() {
  return (
    <div>
      <BrowserRouter>
        <NavigateApp />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function NavigateApp() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        dashboard
      </button>
    </div>
  );
}

export default Practice;
