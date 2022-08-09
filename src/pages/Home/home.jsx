import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { Header, Main } from "./style";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../../loading/loading";

const HomePage = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  function logOut() {
    localStorage.removeItem("@context-user:token");
    navigate("/");
  }

  console.log("home page user", user);
  if (loading) {
    return <Loading />;
  }
  return user ? (
    <>
      <Header>
        <h1>Kenzie Hub</h1>
        <button onClick={logOut}>Sair</button>
      </Header>
      <Main>
        <div className="user__info">
          <h1>{`Olá! ${user.name}`}</h1>
          <span>{user.course_module}</span>
        </div>
      </Main>
    </>
  ) : (
    <Navigate to={"/"} replace />
  );
};

export default HomePage;
