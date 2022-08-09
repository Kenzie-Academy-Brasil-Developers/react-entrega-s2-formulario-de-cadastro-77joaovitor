import { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SingUp from "../components/Sing-up";
import { AuthContext } from "../context/context";
import HomePage from "../pages/Home/home";
import Login from "../pages/Login";

const RouterPages = () => {
  const { user } = useContext(AuthContext);
  console.log("route", user);
  const name = user?.name.replaceAll(" ", "");
  console.log(name);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/singup" element={<SingUp />} />
      <Route path={"/homepage"} element={<HomePage />} />
    </Routes>
  );
};

export default RouterPages;
