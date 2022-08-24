import { useContext } from "react";
import { IToastMessage, ToastContext } from "../../context/ToastContext";
import Toast from "../Toast";
import { ContainerToast } from "./style";

const ToastContainer = () => {
  const { messages } = useContext(ToastContext);
  return (
    <ContainerToast>
      {messages.map((message: IToastMessage) => (
        <Toast message={message} key={message.id} />
      ))}
    </ContainerToast>
  );
};

export default ToastContainer;
