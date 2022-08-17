import { LoginHeader, LoginMain } from "./style";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/context";
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { ToastContext } from "../../context/ToastContext";

const Login = ({ singUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Necessario informar email")
      .email("Email inválido"),
    password: yup.string().required("Informe sua senha"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { singIn } = useContext(AuthContext);
  return (
    <>
      <LoginHeader>
        <h1>Kenzie hub</h1>
      </LoginHeader>
      <LoginMain>
        <div className="container__login">
          <form onSubmit={handleSubmit(singIn)}>
            <span>Login</span>
            {errors.email && <span>Email/senha incorreto!</span>}
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" {...register("email")} />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <FaEye
                id="password"
                className="showPassword"
                onClick={() =>
                  !showPassword ? setShowPassword(true) : setShowPassword(false)
                }
              />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
              />
            </div>
            <button>Login</button>
          </form>
          <div className="container__sinUp">
            <span>Ainda não possue cadastro?</span>
            <Link to={"/singup"}>
              <button id="singUp" type="submit">
                Cadastrar
              </button>
            </Link>
          </div>
        </div>
      </LoginMain>
    </>
  );
};

export default Login;
