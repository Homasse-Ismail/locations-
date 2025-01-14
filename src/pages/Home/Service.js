import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Service = () => {
    const location = useLocation();
    const { date_depart, date_arrivee, ville_depart } = location.state || {};
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchCars = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/vehicules');
            console.log(response.data.vehicules);
            setCars(response.data.vehicules);
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    const filteredCars = cars.filter((car) => {
        const villeMatch = ville_depart
            ? car.agence.VilleAgence?.toLowerCase() === ville_depart.toLowerCase()
            : true;
        const searchMatch = searchTerm
            ? car.Marque?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              car.Model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              car.Couleur?.toLowerCase().includes(searchTerm.toLowerCase())
            : true;
        const statusMatch = car.StatuVehicule === "D";

        return villeMatch && searchMatch && statusMatch;
    });

    return (
        <div className="container mt-5">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Cherchez par nom, modèle ou couleur..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control"
                />
            </div>

            {filteredCars.length > 0 ? (
                filteredCars.map((item) => (
                    <div key={item.id} className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={item.photo}
                                    className="img-fluid rounded-start"
                                    alt={item.Marque}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.Marque}</h5>
                                    <p className="card-text">
                                        <strong>Modèle:</strong> {item.Model}
                                    </p>
                                    <p className="card-text">
                                        <strong>Type:</strong> {item.Type}
                                    </p>
                                    <p className="card-text">
                                        <strong>Agence:</strong> {item.agence.NomAgence}
                                    </p>
                                    <p className="card-text">
                                        <strong>Ville:</strong> {item.agence.VilleAgence}
                                    </p>
                                    <p className="card-text">
                                        <strong>Prix:</strong> {item.PrixJour} MAD
                                    </p>
                                    <p className="card-text">
                                        <strong>Année:</strong> {item.Annee}
                                    </p>
                                    <Link
                                        to={{
                                            pathname: "/register",
                                            state: { car: item }, // Pass car data
                                        }}
                                        className="btn btn-primary"
                                    >
                                        Réserver
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Aucune voiture trouvée.</p>
            )}
        </div>
    );
};

export default Service;
