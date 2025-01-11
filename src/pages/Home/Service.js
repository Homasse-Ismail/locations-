import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Service = () => {
    const [cars, setCars] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        const fetchCars = async () => {
            const response = await fetch('/api/cars');
            const data = await response.json();
            setCars(data);
        };

        fetchCars();
    }, []);

    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.color.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                                <img src={item.photo} className="img-fluid rounded-start" alt={item.name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text"><strong>Modèle:</strong> {item.model}</p>
                                    <p className="card-text"><strong>Couleur:</strong> {item.color}</p>
                                    <p className="card-text"><strong>Prix:</strong> {item.prix} MAD</p>
                                    <p className="card-text"><strong>Année:</strong> {item.annee}</p>
                                    <Link 
                                        to={{
                                            pathname: "/register",
                                            state: { car: item } // Passer les données de la voiture
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
