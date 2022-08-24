import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToastProvider from "./context/ToastContext";
import AuthProvider from "./context/context";
import AddProvider from "./context/AddContext";
import RouterPages from "./Router/Router";
import ToastContainer from "./components/ToastContainer";

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <AuthProvider>
          <AddProvider>
            <RouterPages />
            <ToastContainer />
          </AddProvider>
        </AuthProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
