import { useContext, useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ToastContext } from "../../context/ToastContext";
import { PopUpSucess } from "./style";
import { VscError } from "react-icons/vsc";

const iconsType = {
  sucess: <BsFillCheckCircleFill />,
  error: <VscError />,
};

const Toast = ({ message }) => {
  const [isLeave, setIsLeave] = useState(false);
  const { removeToast } = useContext(ToastContext);

  useEffect(() => {
    let timer;

    if (isLeave) {
      timer = setTimeout(() => {
        removeToast(message.id);
      }, 700);
    } else {
      timer = setTimeout(() => {
        setIsLeave(true);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isLeave]);

  return (
    <PopUpSucess isLeave={isLeave} type={message.type}>
      <div className="popup__sucess">
        {iconsType[message.type]}
        <span>{message.title}</span>
      </div>
      <div className="borderBot"></div>
    </PopUpSucess>
  );
};

export default Toast;
