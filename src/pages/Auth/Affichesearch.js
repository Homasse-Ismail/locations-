import { useLocation } from "react-router-dom";

const Affichesearch = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div className="container mt-5">
      <h3 className="text-center">Résultats de recherche:</h3>
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.id} className="border-bottom mb-4 pb-3">
            <p><strong>Voiture:</strong> {result.car}</p>
            <p><strong>Location:</strong> {result.location}</p>
            <p><strong>Disponible du:</strong> {result.available_from} au {result.available_to}</p>
          </div>
        ))
      ) : (
        <p className="text-center">Aucun résultat trouvé.</p>
      )}
    </div>
  );
};

export default Affichesearch;
