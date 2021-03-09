import '../styles/navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

function NavBar() {

    const[showLinks, setShowLinks] = useState(false);
    
    return (
        <div className="navbar">
            <div className="nav-left">
                <Link to="/">
                    <img className="cpm-logo" src='./cpm.jpg' alt="CPM QS Logo" />
                </Link>
            </div>
            
            <div className="nav-right">
                <div className='links' id={showLinks ? "hidden" : "" }>
                    <Link to="/">Home</Link>
                    {/* <Link to="/about">About</Link> */}
                    <Link to='/services'>Our Services</Link>
                    {/* <Link to="/contact">Contact</Link> */}
                    <a className='header-email-us' href="mailto:info@cpm-qs.co.uk">Contact</a>
                </div>
                <button className="menu-bars" onClick={() => setShowLinks(!showLinks)}  ><FiMenu/></button>
            </div>


        </div>
    );
};



export default NavBar
