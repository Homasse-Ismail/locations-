import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './pages/Home/Nav';
import Main from './pages/Home/Main';
import Service from './pages/Home/Service';
import Login from './pages/Auth/Form/Login';
import Register from './pages/Auth/Form/Registre';
import Demande from './pages/Auth/Form/Demande';
import Confirmation from './pages/Auth/Form/Confirmation';
import Affichesearch from './pages/Auth/Affichesearch';
const App = () => {
    return (
        <Router>
          <Nav />
            <Routes>
                <Route path="/" element={<Main /> } />
                <Route path="/Service" element={<Service />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Demande" element={<Demande />} />
                <Route path="/Confirmation" element={<Confirmation />} />
                {/* <Route path="*" element={<Error404 />} /> */}
                <Route path="/Affichesearch" element={<Affichesearch />} /> 
            </Routes>
        </Router>
    );
};

export default App;