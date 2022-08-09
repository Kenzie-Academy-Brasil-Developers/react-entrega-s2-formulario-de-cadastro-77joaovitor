import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log("module", loading);
  const name1 = user?.name.replaceAll(" ", "");

  useEffect(() => {
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
    loadUser();
  }, []);

  console.log("usuario", user);
  const singIn = async (data) => {
    console.log(data);
    const response = await axios.post(
      "https://kenziehub.herokuapp.com/sessions",
      data
    );
    const { user: userResponse, token } = response.data;
    setUser(userResponse);
    localStorage.setItem("@context-user:token", token);
    navigate("/homepage");
  };

  console.log(user);

  return (
    <AuthContext.Provider value={{ user, singIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
