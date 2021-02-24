import '../styles/navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

function NavBar() {

    const[showLinks, setShowLinks] = useState(false);
    
    return (
        <div className="navbar">
            <div className="nav-left">
            <div className="cpm-logo">
                <h1>CPM </h1>
            </div>
            </div>
            
            <div className="nav-right">
                <div className='links' id={showLinks ? "hidden" : "" }>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to='/services'>Our Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <button className="menu-bars" onClick={() => setShowLinks(!showLinks)}  ><FiMenu/></button>
            </div>


        </div>
    );
};



export default NavBar
