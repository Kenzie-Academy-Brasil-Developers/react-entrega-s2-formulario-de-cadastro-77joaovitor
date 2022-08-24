import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";
import { AuthContext } from "./context";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "./ToastContext";

interface IAddContext {
  addTech: (data: IFormData) => void;
  setUpdate: Dispatch<SetStateAction<boolean>>;
  deleteTech: (event: any) => void;
  setModalAddTechVisible: Dispatch<SetStateAction<boolean>>;
  modalAddTechVisible: Boolean;
  loading: Boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsContext {
  children: ReactNode;
}

interface IData {
  title: string;
  status: string;
}

interface IFormData {
  data: IData;
}

export const AddContext = createContext<IAddContext>({} as IAddContext);

const AddProvider = ({ children }: IPropsContext) => {
  const [modalAddTechVisible, setModalAddTechVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useContext(ToastContext);
  const [update, setUpdate] = useState(true);
  const token = localStorage.getItem("@context-user:token");
  const { loadUser } = useContext(AuthContext);

  const addTech = async (data: IFormData) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${String(
        token
      )}`;
      const response = await axios.post(
        "https://kenziehub.herokuapp.com/users/techs",
        data
      );
      if (response.status === 201) {
        addToast({
          title: "Tech adicionada com sucesso",
          type: "sucess",
        });
        setModalAddTechVisible(false);
      }
      setLoading(false);
    } catch (error: any) {
      if (error.response.status === 401) {
        addToast({
          title: "Algo deu errado",
          type: "error",
        });
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    loadUser();
    setLoading(false);
  }, [update]);

  async function deleteTech(event: any) {
    const id = event.target.parentNode.id;
    try {
      const response = await axios.delete(
        `https://kenziehub.herokuapp.com/users/techs/${id}`
      );
    } catch (error) {}

    loadUser();
  }
  return (
    <AddContext.Provider
      value={{
        addTech,
        setUpdate,
        deleteTech,
        setModalAddTechVisible,
        modalAddTechVisible,
        loading,
        setLoading,
      }}
    >
      {children}
    </AddContext.Provider>
  );
};
export default AddProvider;
