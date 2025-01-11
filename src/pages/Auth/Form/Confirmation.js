import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleReturnToHome = () => {
    navigate("/"); 
  };

  return (
    <div className="container text-center mt-5">
      <div className="card p-5 shadow-lg border-0">
        <h2 className="mb-4 text-success">Votre demande a été envoyée avec succès !</h2>
        <p className="mb-4">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
        <button 
          onClick={handleReturnToHome} 
          className="btn btn-primary"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
