import { Routes, Route } from "react-router-dom";
import SingUp from "../pages/Sing-up";
import HomePage from "../pages/Home/home";
import Login from "../pages/Login";

const RouterPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/singup" element={<SingUp />} />
      <Route path={"/homepage"} element={<HomePage />} />
    </Routes>
  );
};

export default RouterPages;
