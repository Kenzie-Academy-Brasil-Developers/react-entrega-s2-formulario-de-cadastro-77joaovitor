import { CardUl } from "./style";
import CardComp from "../card";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { GoDiffAdded } from "react-icons/go";

interface IPropsComponents {
  openModalAddTech: () => void;
}

interface IUserTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

const Cards = ({ openModalAddTech }: IPropsComponents) => {
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
          {user.techs.map((tech: IUserTech, index: number) => (
            <CardComp key={index} user={tech} />
          ))}
        </ul>
      ) : (
        <span>Você ainda nao aprendeu nenhuma technologia</span>
      )}
    </CardUl>
  );
};

export default Cards;
