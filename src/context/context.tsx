import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "./ToastContext";
import { IPropsContext } from "./AddContext";

interface IData {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface IContext {
  singIn?: (data: IData) => void;
  user?: any;
  loading: Boolean;
  loadUser: () => void;
  onSubmitFunction: (data: any) => void;
  modalSucessShow: Boolean;
  modalFalseShow: Boolean;
  setModalFalseShow: Dispatch<SetStateAction<boolean>>;
  setModalSucessShow: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider = ({ children }: IPropsContext) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);

  async function loadUser() {
    const token = localStorage.getItem("@context-user:token");

    if (token) {
      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${String(
          token
        )}`;
        const { data } = await axios.get(
          "https://kenziehub.herokuapp.com/profile"
        );
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const singIn = async (data: IData) => {
    try {
      const response = await axios.post(
        "https://kenziehub.herokuapp.com/sessions",
        data
      );
      const { user: userResponse, token } = response.data;
      setUser(userResponse);
      localStorage.setItem("@context-user:token", token);
      if (response.status === 200) {
        addToast({
          title: "Login realizado com sucesso!!",
          type: "sucess",
        });
      }

      navigate("/homepage");
    } catch (error: any) {
      if (error.response.status === 401) {
        addToast({
          title: "Falha ao realizar o login!",
          type: "error",
        });
      }
    }
  };

  const [modalSucessShow, setModalSucessShow] = useState(false);
  const [modalFalseShow, setModalFalseShow] = useState(false);

  function onSubmitFunction(data: IData) {
    const { name, email, password, bio, contact, course_module } = data;
    axios
      .post("https://kenziehub.herokuapp.com/users", {
        email,
        password,
        name,
        bio,
        contact,
        course_module,
      })
      .then((response) => {
        if (response.status === 201) {
          addToast({
            title: "Cadastro feito com sucesso",
            type: "sucess",
          });
        }
      })
      .catch((err) =>
        err
          ? addToast({
              title: "Falha ao realizar o cadastro",
              type: "error",
            })
          : null
      );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        singIn,
        loading,
        loadUser,
        onSubmitFunction,
        modalSucessShow,
        modalFalseShow,
        setModalFalseShow,
        setModalSucessShow,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
