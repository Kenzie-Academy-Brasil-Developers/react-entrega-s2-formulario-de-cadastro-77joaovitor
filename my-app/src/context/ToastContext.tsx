import { createContext, InputHTMLAttributes, useState } from "react";
import { v4 as uuid } from "uuid";
import { IPropsContext } from "./AddContext";

export interface IToastMessage {
  id: string;
  title: string;
  type: string;
}

type IToastMessagesAdd = Omit<IToastMessage, "id">;

interface IToastContext {
  messages: IToastMessage[];
  addToast: ({ title, type }: IToastMessagesAdd) => void;
  removeToast: (id: string) => void;
}

export interface IAddToast extends InputHTMLAttributes<HTMLInputElement> {}

export const ToastContext = createContext<IToastContext>({} as IToastContext);

const ToastProvider = ({ children }: IPropsContext) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  function removeToast(id: string) {
    const filter = messages.filter((elem) => elem.id !== id);
    setMessages(filter);
  }
  function addToast({ title, type }: IToastMessagesAdd) {
    const toast = {
      id: uuid(),
      title,
      type,
    };
    setMessages((oldMessage) => [...oldMessage, toast]);
  }
  return (
    <ToastContext.Provider value={{ messages, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
