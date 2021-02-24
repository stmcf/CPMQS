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
                <a>INSERT CPM IMAGE HERE</a>
            </div>
            </div>
            
            <div className="nav-right">
                <div className='links' id={showLinks ? "hidden" : "" }>
                    <Link onClick={() => setShowLinks(!showLinks)}  to="/">Home</Link>
                    <Link onClick={() => setShowLinks(!showLinks)}  to="/about">About</Link>
                    <Link onClick={() => setShowLinks(!showLinks)}  to='/services'>Our Services</Link>
                    <Link onClick={() => setShowLinks(!showLinks)}  to="/contact">Contact</Link>
                </div>
                <button className="menu-bars" onClick={() => setShowLinks(!showLinks)}  ><FiMenu/></button>
            </div>


        </div>
    );
};



export default NavBar
