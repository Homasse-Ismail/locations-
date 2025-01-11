import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import About from "./About";
import CarRentalNews from "./CarRentalNews";
import Footer from "./Footer";
import Section from "./Section";

const Main = () => {
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");
  const [formValues, setFormValues] = useState({
    date_depart: "",
    date_arrivee: "",
    ville_depart: "",
    ville_arrivee: ""
  });
  const navigate = useNavigate();

  const isDateValid = (dateDepart, dateArrivee) => {
    const today = new Date();
    const departDate = new Date(dateDepart);
    const arriveeDate = new Date(dateArrivee);

    if (departDate < today) {
      return "La date de départ ne peut pas être dans le passé.";
    }

    if (departDate >= arriveeDate) {
      return "La date de départ doit être avant la date d'arrivée.";
    }

    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });

    if (name === "date_depart" || name === "date_arrivee") {
      const dateError = isDateValid(formValues.date_depart, formValues.date_arrivee);
      setValidationError(dateError);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const { date_depart, date_arrivee, ville_depart, ville_arrivee } = formValues;

    const dateError = isDateValid(date_depart, date_arrivee);
    if (dateError) {
      setValidationError(dateError);
      return;
    }

    setValidationError("");

    try {
      const response = await fetch(
        `/api/cars/search?date_depart=${date_depart}&date_arrivee=${date_arrivee}&ville_depart=${ville_depart}&ville_arrivee=${ville_arrivee}`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const data = await response.json();
      navigate("/results", { state: { results: data } });
    } catch (err) {
      setError("Impossible de récupérer les résultats. Essayez plus tard.");
    }
  };

  return (
    <div>
    <div className="container mt-5">
      <img
        src="https://pics.craiyon.com/2023-10-07/a5bb248ed4714a639afdd8055c5a70c3.webp"
        alt="Background"
        className="img-fluid w-100"
        style={{ opacity: 0.9, height: "auto", maxHeight: "450px", objectFit: "cover" }}
      />
      <form
        onSubmit={handleSearch}
        className="bg-transparent p-4 rounded shadow-sm position-absolute top-50 start-50 translate-middle w-75"
        style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      >
        <h2 className="text-center text-light mb-4">Réserver un véhicule </h2>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-light">Date de départ:</label>
            <input
              type="date"
              name="date_depart"
              className="form-control"
              value={formValues.date_depart}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-light">Date d'arrivée:</label>
            <input
              type="date"
              name="date_arrivee"
              className="form-control"
              value={formValues.date_arrivee}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-light">Ville de départ:</label>
            <input
              type="text"
              name="ville_depart"
              className="form-control"
              value={formValues.ville_depart}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-light">Ville d'arrivée:</label>
            <input
              type="text"
              name="ville_arrivee"
              className="form-control"
              value={formValues.ville_arrivee}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-danger" disabled={!!validationError}>
            Rechercher
          </button>
        </div>
        {validationError && <div className="text-danger mt-3 text-center">{validationError}</div>}
        {error && <h6 className="text-light mt-3 text-center">{error}</h6>}
      </form>
    </div>
      <div className="container">
      <About />
      </div>
      <Section />
      <CarRentalNews />
      <Footer />
    </div>
  );
};

export default Main;
