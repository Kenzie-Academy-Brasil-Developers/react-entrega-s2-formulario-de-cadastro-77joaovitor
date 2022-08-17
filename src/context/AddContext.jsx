import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./context";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "./ToastContext";

export const AddContext = createContext({});

const AddProvider = ({ children }) => {
  const [modalAddTechVisible, setModalAddTechVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useContext(ToastContext);
  const [update, setUpdate] = useState(true);
  const token = localStorage.getItem("@context-user:token");
  const { loadUser } = useContext(AuthContext);

  const addTech = async (data) => {
    try {
      axios.defaults.headers.authorization = `Bearer ${token}`;
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
    } catch (error) {
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

  async function deleteTech(event) {
    const id = event.target.parentNode.id;
    try {
      const response = await axios.delete(
        `https://kenziehub.herokuapp.com/users/techs/${id}`
      );
    } catch (error) {
      console.log(error);
    }

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
