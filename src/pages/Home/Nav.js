import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
    const navbar = [
        { id: 1, title: "Home", lien: "/" },
        { id: 2, title: "Service", lien: "/Service" },
        { id: 3, title: "Contact", lien: "/contact" },
        { id: 4, title: "Login", lien: "/Login" },
        { id: 5, title: "Demande", lien: "/Demande" },
        { id: 6, title: "Confirmation", lien: "/Confirmation" },
        { id: 7, title: "Register", lien: "/Register" }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">BrandLogo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navbar.map((item) => {
                            return (
                                <li key={item.id} className="nav-item">
                                    <Link className="nav-link text-dark fw-semibold" to={item.lien}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
