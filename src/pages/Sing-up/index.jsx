import { Header, FormSingUp, PopUpSucess, PopUpFalse } from "./style";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import { useState } from "react";
import { AuthContext } from "../../context/context";
import { useContext } from "react";

const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    onSubmitFunction,
    modalSucessShow,
    modalFalseShow,
    setModalFalseShow,
    setModalSucessShow,
  } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$",
        "Senha inválida"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), ""], "As duas senhas deve ser iguais"),
    bio: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    course_module: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      {modalSucessShow && (
        <PopUpSucess>
          <div className="container">
            <div className="popup__sucess">
              <BsFillCheckCircleFill />
              <span>Conta criada com sucesso!</span>
              <button onClick={() => setModalSucessShow(false)}>x</button>
            </div>
            <div className="borderBot"></div>
          </div>
        </PopUpSucess>
      )}
      {modalFalseShow && (
        <PopUpFalse>
          <div className="container">
            <div className="popup__sucess">
              <VscError />
              <span>Ops! algo deu errado</span>
              <button onClick={() => setModalFalseShow(false)}>x</button>
            </div>
            <div className="borderBot"></div>
          </div>
        </PopUpFalse>
      )}
      <Header>
        <div className="header__container">
          <h1>Kenzie Hub</h1>
          <Link to={"/"}>
            <button>Voltar</button>
          </Link>
        </div>
      </Header>
      <FormSingUp>
        <div className="form__title">
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="name">
            <label htmlFor="name">Nome</label>
            <input
              boderColor={errors}
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <span>{errors.name?.message}</span>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <span>{errors.email?.message}</span>
          </div>
          <div className="password-container">
            <div className="password-icon">
              <label className="aioutline" htmlFor="">
                Senha {<AiOutlineInfoCircle />}
              </label>
              <div className="password-info">
                <p>
                  Sua senha deve conter ao menos: 8 digitos, letra maiuscula e
                  minuscula, um numero e um caracter especial
                </p>
              </div>
            </div>
            <FaEye
              id="password"
              className="showPassword"
              onClick={() =>
                !showPassword ? setShowPassword(true) : setShowPassword(false)
              }
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <span>{errors.password?.message}</span>
          </div>

          <div>
            <label htmlFor="">Confirmar senha</label>
            <input
              type="password"
              placeholder="Confirme aqui sua senha"
              {...register("confirm_password")}
            />
            <span>{errors.confirm_password?.message}</span>
          </div>
          <div>
            <label htmlFor="">Bio</label>
            <input
              type="text"
              placeholder="Fale um pouco sobre você"
              {...register("bio")}
            />
            <span>{errors.bio?.message}</span>
          </div>
          <div>
            <label htmlFor="">Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <span>{errors.contact?.message}</span>
          </div>
          <div>
            <label htmlFor="">Selecionar modulo</label>
            <select
              type="text"
              name="select"
              placeholder="Modulo 1"
              {...register("course_module")}
            >
              <option value="Modulo 1">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Modulo 2">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Modulo 3">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Modulo 4">Quarto módulo (Backend Avançado)</option>
            </select>
            <span>{errors.course_module?.message}</span>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <form></form>
      </FormSingUp>
    </>
  );
};

export default SingUp;
