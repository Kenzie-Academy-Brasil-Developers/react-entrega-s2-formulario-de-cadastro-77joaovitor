import "./App.css";
import Pages from "./pages";
import RouterPages from "./Router/Router";
import AuthProvider, { AuthContext } from "./context/context";
import Loading from "./loading/loading";
import { useContext } from "react";

function App() {
  const { loading, user } = useContext(AuthContext);
  console.log("ap", loading);
  return (
    <div className="App">
      <AuthProvider>
        <RouterPages />
      </AuthProvider>
    </div>
  );
}

export default App;
