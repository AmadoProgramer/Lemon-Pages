import { useState } from "react";
import "../components/login.css";

const users = [
{  username:'admin', password:'123456'},
{ username:'user', password:'456789'}
]

 export function Login ({setUser}){
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState ("")
    const [error, setError] = useState(false)
    const [ errorMessage, setErrorMessage]= useState ("")

     const ValidandoDatos = (e) => {
        e.preventDefault();
        if(username===""||password==="") {
            setError(true);
            setErrorMessage("Todos los campos son obligatorios");
            return;
        }
        const user =users.find(
            (u) => u.username === username && u.password === password
        );
        if (user){
            setError(false);
            setUser (username);
        }
        else{
            setError(true);
            setErrorMessage("Nombre de usuario o contraseña incorrecta")
        }
        setUsername("");
        setPassword("");
     };
    return (
        < >
        <div className="login">
        <h1>Iniciar sesion</h1>
        <form action= "" onSubmit={ValidandoDatos} className="inicio" >
            <input type="text"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(x)=> setUsername(x.target.value)}
            className="datos"
            name="username"
            />
            <input type="password"
            placeholder="contraseña"
            className="datos"
            value={password}
            onChange={(x) => setPassword (x.target.value)}
            name="password"
            />
            <button type="submit">Iniciar sesion</button>
            {error && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
        </div>
        </>
    )
}
 