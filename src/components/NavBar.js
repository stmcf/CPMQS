import '../styles/navbar.css'

function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-left"></div>
            
            <div className="nav-right">
                <div className='links'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>

                </div>
            </div>


        </div>
    )
}



export default NavBar
