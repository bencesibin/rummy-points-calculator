import "./App.css";

import AuthContextProvider from "./context/AuthContext";
import Login from "./component/Login";

function App() {
  return (
    <AuthContextProvider>
      <Login />
    </AuthContextProvider>
  );
}

export default App;
