import '../styles/navbar.css';
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

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
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <button className="menu-bars" onClick={() => setShowLinks(!showLinks)}  ><FiMenu/></button>
            </div>


        </div>
    )
}



export default NavBar
