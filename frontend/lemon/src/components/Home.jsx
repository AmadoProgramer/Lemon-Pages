import Feed from "./feed";

function Bienvenido({ setUser }) {
  const cerrarSesion = () => {
    setUser("");
  };

  return (
    <div className="relative">
      <Feed />
      <button 
        onClick={cerrarSesion}
        className="fixed top-4 right-4 z-[60] bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-colors"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Bienvenido;