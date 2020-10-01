import React  from 'react';
import '../Navbar/navbar.styles.css'
const NavBar = () => {
    return ( 
        <nav >
            <div className="myContainer" id="nav-flex">
                <div >
                    <h1 className='nav__header'>where in the world?</h1>
                </div>
                <div>
                    <h1 className='nav__header'>Dark Mode</h1>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;