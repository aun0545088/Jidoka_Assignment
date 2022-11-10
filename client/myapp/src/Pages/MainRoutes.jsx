import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SignUp from "./SignUp";
import Login from "./Login";
import ReqAuth from "./ReqAuth";
import Dashboard from "./Dashboard";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ReqAuth>
              <Dashboard />
            </ReqAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
