import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";
import DashBoardPage from "../pages/dashboardPage/dashboardPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/home" element={<LandingPage />} />
    <Route path="/dashboard" element={<DashBoardPage />} />
    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
);

export default RoutesMain;
