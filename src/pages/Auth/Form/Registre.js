import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    // Vérifier que tous les champs sont remplis
    if (!email || !password || !confirmPassword) {
      setError("Tous les champs doivent être remplis.");
      return;
    }

    try {
      const response = await fetch("http://localhost/api/register", {
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

      // Si la requête est réussie, rediriger vers la page de demande
      if (response.ok) {
        navigate("/demande", { state: { carData: data.carData } }); // Assurez-vous que carData est défini dans la réponse
      } else {
        setError(data.message || "Erreur lors de l'inscription.");
      }
    } catch (error) {
      setError("Impossible de s'inscrire. Essayez plus tard.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">S'inscrire</h2>
      <form onSubmit={handleRegister} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
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
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirm_password" className="form-label">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirm_password"
            className="form-control"
            name="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-danger text-center">{error}</p>}

        <button type="submit" className="btn btn-primary w-100">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Register;