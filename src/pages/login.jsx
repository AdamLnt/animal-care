import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Connexion avec ${email}`);
    // Ici tu peux ajouter la logique de login réelle
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="cta-btn">Se connecter</button>
        </form>
        <p className="toggle-text">
          Pas de compte ? <Link to="/signup">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
}
