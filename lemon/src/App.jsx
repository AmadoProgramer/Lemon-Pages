import { useState } from "react";
import Bienvenido from "./components/Bienvenido.jsx";
import { Login } from "./components/Login.jsx";

function App() {
  const [user, setUser] = useState("")
  return (
    <>
    {
      user.length === 0
      ?<Login setUser={setUser}/>
      : <Bienvenido user={user} setUser={setUser}/>
    }
    </>
  );
}

export default App;