import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "./ToastContext";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);

  async function loadUser() {
    const token = localStorage.getItem("@context-user:token");

    if (token) {
      try {
        axios.defaults.headers.authorization = `Bearer ${token}`;
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

  const singIn = async (data) => {
    try {
      const response = await axios.post(
        "https://kenziehub.herokuapp.com/sessions",
        data
      );
      const { user: userResponse, token } = response.data;
      setUser(userResponse);
      localStorage.setItem("@context-user:token", token);
      // console.log(response.message);
      if (response.status === 200) {
        addToast({
          title: "Login realizado com sucesso!!",
          type: "sucess",
        });
      }

      navigate("/homepage");
    } catch (error) {
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

  function modalFalse() {
    setModalFalseShow(true);
    setTimeout(() => {
      setModalFalseShow(false);
    }, 4000);
  }

  function modalTrue() {
    setModalSucessShow(true);
    setTimeout(() => {
      navigate("/");
    }, 4200);
    setTimeout(() => {
      setModalSucessShow(false);
    }, 4000);
  }
  function onSubmitFunction(data) {
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
