import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { Header, Main } from "./style";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../../components/loading/loading";
import Cards from "../../components/cardList";
import ModalTech from "../../components/modalAddTech";
import { useState } from "react";
import ModalUpdateTech from "../../components/modalAddTech";
import { AddContext } from "../../context/AddContext";
import Toast from "../../components/Toast";

const HomePage = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const { modalAddTechVisible, setModalAddTechVisible } =
    useContext(AddContext);
  // const [modalUpdateTechVisible, setModalUpdateTechVisible] = useState(false);

  function logOut() {
    localStorage.removeItem("@context-user:token");
    navigate("/");
  }

  if (loading) {
    return <Loading />;
  }
  return user ? (
    <>
      {modalAddTechVisible && (
        <ModalTech closeModalAddTech={() => setModalAddTechVisible(false)} />
      )}
      <Header>
        <h1>Kenzie Hub</h1>
        <button onClick={logOut}>Sair</button>
      </Header>
      <Main>
        <div className="user__info">
          <h1>{`Olá! ${user.name}`}</h1>
          <span>{user.course_module}</span>
        </div>
        <Cards
          openModalAddTech={() => setModalAddTechVisible(true)}
          // openModalUpdateTech={() => setModalUpdateTechVisible(true)}
        />
      </Main>
    </>
  ) : (
    <Navigate to={"/"} replace />
  );
};

export default HomePage;
