import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    const cars = [
        {name: 'Tesla', model: 'Model X', color: 'Red', img: 'https://th.bing.com/th/id/OIP.QRA5oXMWvghpRut3GYuiMAHaEK?w=640&h=360&rs=1&pid=ImgDetMain'},
        {name: 'Mercedes', model: 'E-Class', color: 'Blue', img: 'https://ecomento.de/wp-content/uploads/2015/04/Mercedes-AMG-GT-Elektroauto-Hybrid-640x368.jpg'},
        {name: 'Audi', model: 'A6', color: 'Black', img: 'https://th.bing.com/th/id/OIP.EL_4YEdjaXTQ5lzLpSJqtQHaEK?pid=ImgDet&w=192&h=108&c=7&dpr=1.6'}
    ];

    return (
        <div className="container mt-2">
            <h2 className="h2 text-center pb-3">Location de voitures au Maroc</h2>
            <div className="row">
                {cars.map((car, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card bg-light mb-4">
                            <img src={car.img} className="card-img-top" alt={car.name} />
                            <div className="card-body">
                                <h5 className="card-title">{car.name}</h5>
                                <p className="card-text">Model : {car.model} -- {car.color}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
