import "./App.css";
import RouterPages from "./Router/Router";
import AuthProvider from "./context/context";
import AddProvider from "./context/AddContext";
import ToastProvider from "./context/ToastContext";
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
