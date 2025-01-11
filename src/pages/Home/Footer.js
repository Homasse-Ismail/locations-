import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="mb-3">Chez wovoiture</h5>
                        <p>
                        Nous visons à remédier aux inconvénients et à l'inefficacité du processus traditionnel de location de voitures en fournissant une plate-forme conviviale qui relie les locataires au véhicule parfait, rendant le transport transparent et accessible.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3">Nos Contact Info</h5>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-geo-alt-fill"></i> Casablanca, Maroc</li>
                            <li><i className="bi bi-telephone-fill"></i> +212 691-828662</li>
                            <li><i className="bi bi-telephone-fill"></i> +212 663-517325</li>
                            <li><i className="bi bi-envelope-fill"></i> contact@wovoiture.ma</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3">Liens rapides</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">À propos</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                            <li><a href="#" className="text-white">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3">Social Network</h5>
                        <ul className="list-unstyled d-flex">
                            <li><a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a></li>
                            <li><a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a></li>
                            <li><a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i></a></li>
                            <li><a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a></li>
                            <li><a href="#" className="text-white"><i className="bi bi-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p className="mb-0">Copyright 2024 - Wovoiture</p>
                    <p><a href="#" className="text-white me-2">Terms & Conditions</a> | <a href="#" className="text-white">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
