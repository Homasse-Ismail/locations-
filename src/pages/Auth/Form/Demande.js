import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Demande = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { carData } = location.state || {};
  
  const [userData, setUserData] = useState({
    nom: "",
    prenom: "",
    date_naissance: "",
    ville: "",
    CIN: "",
    adresse: "",
    telephone: "",
    message: "",
  });
  const [error, setError] = useState("");

  if (!carData) {
    return <p>Aucune voiture sélectionnée.</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/api/demande", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Si vous avez un token d'authentification, ajoutez-le ici
          // "Authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          ...userData,
          car_id: carData.id, 
          
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/confirmation"); 
      } else {
        setError(data.message || "Erreur lors de l'envoi de la demande.");
      }
    } catch (error) {
      setError("Impossible d'envoyer la demande. Essayez plus tard.");
    }
  };

  return (
    <div>
      <h2>Demande de réservation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom du véhicule:</label>
          <input type="text" value={carData.name} readOnly />
        </div>
        <div>
          <label>Modèle:</label>
          <input type="text" value={carData.model} readOnly />
        </div>
        <div>
          <label>Couleur:</label>
          <input type="text" value={carData.color} readOnly />
        </div>
        <div>
          <label>Prix:</label>
          <input type="text" value={carData.prix} readOnly />
        </div>
        <div>
          <label>Année:</label>
          <input type="text" value={carData.annee} readOnly />
        </div>

        <div>
          <label>Votre nom:</label>
          <input
            type="text"
            name="user_name"
            value={userData.user_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Votre email:</label>
          <input
            type="email"
            name="user_email"
            value={userData.user_email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Date de naissance:</label>
          <input
            type="date"
            name="date_naissance"
            value={userData.date_naissance}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Ville:</label>
          <input
            type="text"
            name="ville"
            value={userData.ville}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>CIN:</label>
          <input
            type="text"
            name="CIN"
            value={userData.CIN}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Adresse:</label>
          <textarea
            name="adresse"
            value={userData.adresse}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label>Téléphone:</label>
          <input
            type="number"
            name="telephone"
            value={userData.telephone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={userData.message}
            onChange={handleChange}
            placeholder="Message ou instructions supplémentaires..."
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Soumettre la demande</button>
      </form>
    </div>
  );
};

export default Demande;
