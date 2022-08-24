import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { AddContext } from "../../context/AddContext";
import { Card } from "./style";

interface IUser {
  title: string;
  id: string;
  status: string;
}

interface IPropsCard {
  user: IUser;
  openModalUpdateTech?: () => void;
}

const CardComp = ({ user, openModalUpdateTech }: IPropsCard) => {
  const { deleteTech } = useContext(AddContext);
  return (
    <Card onClick={openModalUpdateTech}>
      <h3>{user.title}</h3>
      <div id={user.id}>
        <span>{user.status}</span>
        <button id={user.id} onClick={deleteTech}>
          <FaTrashAlt id={user.id} />
        </button>
      </div>
    </Card>
  );
};

export default CardComp;
