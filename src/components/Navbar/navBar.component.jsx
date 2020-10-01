import React, { useContext}  from 'react';


import { colorContext } from '../../context/Color';
import '../Navbar/navbar.styles.css'
const NavBar = () => {

    const { changeButton, lightColor, darkColor, isLight } = useContext(colorContext);
        const theme = isLight ? lightColor : darkColor;
    return (
      <nav style={{ background: theme.bg, color: theme.color }}>
        <div className="container" id="nav-flex">
          <div>
            <h1 className="nav__header">where in the world?</h1>
          </div>
          <div>
            <h1 className="nav__header" onClick={changeButton}>
              Dark Mode
            </h1>
          </div>
        </div>
      </nav>
    );
}
 
export default NavBar;