import { CardUl } from "./style";
import CardComp from "../card";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { GoDiffAdded } from "react-icons/go";

const Cards = ({ openModalAddTech, openModalUpdateTech }) => {
  const { user, loadUser } = useContext(AuthContext);

  return (
    <CardUl>
      <div>
        <h2>Tecnologias</h2>
        <button onClick={openModalAddTech}>
          <GoDiffAdded />
        </button>
      </div>
      {user.techs.length > 0 ? (
        <ul>
          {user.techs.map((tech, index) => (
            <CardComp
              key={index}
              user={tech}
              openModalUpdateTech={openModalUpdateTech}
            />
          ))}
        </ul>
      ) : (
        <span>Você ainda nao aprendeu nenhuma technologia</span>
      )}
    </CardUl>
  );
};

export default Cards;
