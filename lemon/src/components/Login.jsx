import { useState } from "react";
import "./login.css";

const users = [
  { username: 'admin', password: '123456' },
  { username: 'user', password: '456789' }
];

export function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const ValidandoDatos = (e) => {
    e.preventDefault();
    
    if (username === "" || password === "") {
      setError(true);
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }
    
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    
    if (user) {
      setError(false);
      setUser(username);
    } else {
      setError(true);
      setErrorMessage("Nombre de usuario o contraseña incorrecta");
    }
    
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <span>📚</span>
          </div>
          <h1 className="login-title">Bookstagram</h1>
          <p className="login-subtitle">Inicia sesión para continuar</p>
        </div>

        <form onSubmit={ValidandoDatos} className="login-form">
          <div className="form-group">
            <label className="form-label">Nombre de Usuario</label>
            <div className="input-container">
              <span className="input-icon">👤</span>
              <input
                type="text"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
                name="username"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <div className="input-container">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                name="password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          {error && (
            <div className="error-message">
              <span style={{marginRight: "0.5rem"}}>⚠️</span>
              {errorMessage}
            </div>
          )}

          <button type="submit" className="submit-button">
            Iniciar Sesión
          </button>
        </form>

        <div className="forgot-password">
          <p>¿Olvidaste tu contraseña?</p>
          <button className="forgot-link">Recuperar cuenta</button>
        </div>

        <div className="test-users">
          <p className="test-users-title">Usuarios de prueba:</p>
          <div className="test-users-list">
            <div className="test-user">
              <span style={{fontWeight: "bold"}}>admin</span> / 123456
            </div>
            <div className="test-user">
              <span style={{fontWeight: "bold"}}>user</span> / 456789
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}