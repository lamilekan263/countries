import React  from 'react';
import '../Navbar/navbar.styles.css'
const NavBar = () => {
    return ( 
        <nav >
            <div className="myContainer" id="nav-flex">
                <div>
                    <h1 >where in the world?</h1>
                </div>
                <div>
                    <h1>Dark Mode</h1>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;