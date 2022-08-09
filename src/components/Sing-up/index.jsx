import { Header, FormSingUp, PopUpSucess, PopUpFalse } from "./style";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import { useState } from "react";

const SingUp = () => {
  const [modalSucessShow, setModalSucessShow] = useState(false);
  const [modalFalseShow, setModalFalseShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$",
        "Sua senha deve conter ao menos: 8 digitos, letra, um numero e um caracter especial"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), "As duas senhas deve ser iguais"]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors);
  function modalFalse() {
    setModalFalseShow(true);
    setTimeout(() => {
      setModalFalseShow(false);
    }, 4000);
  }

  function modalTrue() {
    setModalSucessShow(true);
    setTimeout(() => {
      setModalSucessShow(false);
    }, 4000);
  }
  function onSubmitFunction(data) {
    const {
      name,
      email,
      password,
      confirmPassword,
      bio,
      contact,
      course_module,
    } = data;
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
          modalTrue();
        }
      })
      .catch((err) => (err ? modalFalse() : null));
  }
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
          </div>
          <div className="password-container">
            <div className="password-icon">
              <label className="aioutline" htmlFor="">
                Senha {<AiOutlineInfoCircle />}
              </label>
              <div className="password-info">
                <span>
                  Sua senha deve conter ao menos: 8 digitos, letra maiuscula e
                  minuscula, um numero e um caracter especial
                </span>
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
            ></input>
          </div>

          <div>
            <label htmlFor="">Confirmar senha</label>
            <input
              type="password"
              placeholder="Confirme aqui sua senha"
              {...register("confirm_password")}
            />
          </div>
          <div>
            <label htmlFor="">Bio</label>
            <input
              type="text"
              placeholder="Fale um pouco sobre você"
              {...register("bio")}
            />
          </div>
          <div>
            <label htmlFor="">Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
          </div>
          <div>
            <label htmlFor="">Selecionar modulo</label>
            <select
              type="text"
              name="select"
              placeholder="Modulo 1"
              {...register("course_module")}
            >
              <option value="Modulo 1">Modulo 1</option>
              <option value="Modulo 2">Modulo 2</option>
              <option value="Modulo 3">Modulo 3</option>
              <option value="Modulo 4">Modulo 4</option>
              <option value="Modulo 5">Modulo 5</option>
              <option value="Modulo 6">Modulo 6</option>
            </select>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <form></form>
      </FormSingUp>
    </>
  );
};

export default SingUp;
