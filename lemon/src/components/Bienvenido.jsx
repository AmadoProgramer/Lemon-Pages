
function Bienvenido( {user,setUser}){
     const cerrarSesion = () => {
        setUser("")
     };
    return(
        <>
        <h1> Bienvenido a mi web</h1>
        <h2> Hola { user} </h2>
        <button onClick={cerrarSesion}> Cerrar sesion</button>
        </>
    )
}

export default Bienvenido;