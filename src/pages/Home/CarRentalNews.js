import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
const CarRentalNews = () => {
    const news = [
        {
            date: '8 Juil',
            city: 'Marrakech',
            title: 'Location de voiture à Marrakech',
            description: 'Louez votre voiture idéale à Marrakech ! Découvrez un vaste choix de véhicules et réservez avec nos agences partenaires de confiance.',
            img: 'https://www.voyageway.com/wp-content/uploads/2018/01/ou-dormir-a-marrakech.jpg',
        },
        {
            date: '2 Juin',
            city: 'Casablanca',
            title: 'Location de voiture Casablanca',
            description: 'Réservez facilement votre voiture à Casablanca avec wovoiture.ma. Large choix, tarifs compétitifs et service premium pour votre séjour au Maroc.',
            img: 'https://th.bing.com/th/id/OIP.rhhJPIUToTB1F_pdULcaXgHaE8?rs=1&pid=ImgDetMain',
        },
        {
            date: '11 Juin',
            city: 'Agadir',
            title: 'Location de voiture Agadir',
            description: 'Location de voitures à Agadir : explorez une sélection de véhicules de qualité auprès d\'agences partenaires fiables. Réservez simplement et voyagez sereinement!',
            img: 'https://th.bing.com/th/id/OIP.24zy6NWjkPTRRbUl5JY6kQHaE8?w=612&h=408&rs=1&pid=ImgDetMain',
        }
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center pb-3">Dernières nouvelles</h2>
            <p className="text-center">
                Dernières nouvelles, nouvelles perspectives et couverture approfondie. <br />
                Restez en tête avec nos dernières nouvelles, informations et analyses.
            </p>
            <div className="row">
                {news.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card bg-light">
                            <img src={item.img} className="card-img-top" alt={`Location de voiture à ${item.city}`} />
                            <div className="card-body">
                                <span className="badge bg-danger">{item.date}</span>
                                <h5 className="card-title mt-3">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href="#" className="btn btn-light">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarRentalNews;
