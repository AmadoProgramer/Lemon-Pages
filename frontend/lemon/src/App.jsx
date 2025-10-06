import { useState } from "react";
import { Login } from "./components/Login.jsx";
import Bienvenido from "./components/Home.jsx";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      {user.length === 0 ? (
        <Login setUser={setUser} />
      ) : (
        <Bienvenido user={user} setUser={setUser} />
      )}
    </>
  );
}

export default App;
