import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { AddContext } from "../../context/AddContext";

import { ModalAddTech } from "./style";

const ModalTech = ({ closeModalAddTech }) => {
  const { register, handleSubmit } = useForm();
  const { addTech, setUpdate, loading, setLoading } = useContext(AddContext);
  console.log(loading);
  return (
    <ModalAddTech>
      <div>
        <header>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={closeModalAddTech}>x</button>
        </header>
        <div>
          {loading && <AiOutlineLoading size={36} />}
          <form onSubmit={handleSubmit(addTech)}>
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" {...register("title")} />
            </div>
            <div>
              <label htmlFor="stats">Tecnologia status</label>
              <select name="status" id="stats" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediario">Intermediario</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
            <button
              type="submit"
              onClick={() => {
                setUpdate(true);
                setTimeout(() => {
                  setUpdate(false);
                }, 1000);
                setLoading(true);
              }}
            >
              {}
              Cadatrar Tecnologia
            </button>
          </form>
        </div>
      </div>
    </ModalAddTech>
  );
};

export default ModalTech;
