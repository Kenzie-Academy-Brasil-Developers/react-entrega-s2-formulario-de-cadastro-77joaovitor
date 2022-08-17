import { waitForElementToBeRemoved } from "@testing-library/react";
import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  function removeToast(id) {
    const filter = messages.filter((elem) => elem.id !== id);
    setMessages(filter);
  }
  function addToast({ title, type }) {
    const toast = {
      id: uuid(),
      title,
      type,
    };
    setMessages((oldMessage) => [...oldMessage, toast]);

    // setTimeout(() => {
    //   removeToast(toast.id);
    // }, 3000);
  }
  return (
    <ToastContext.Provider value={{ messages, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
