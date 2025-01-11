import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Tous les champs doivent être remplis.");
      return;
    }

    try {
      const response = await fetch("http://localhost/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        navigate("/");
      } else {
        setError(data.message || "Erreur lors de la connexion.");
      }
    } catch (error) {
      setError("Impossible de se connecter. Essayez plus tard.");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleLogin} className="bg-light p-4 rounded shadow-sm w-50 mx-auto">
      <h1 className="text-center mb-4">Se connecter</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe :</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Se connecter
        </button>
      </form>

      {error && <p className="text-danger text-center mt-3">{error}</p>}
    </div>
  );
};

export default Login;
