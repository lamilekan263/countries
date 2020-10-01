import React,{ useContext} from 'react'

import './selectCountryRegion.styles.css'
import { CountryContext } from "../../context/country";
import { colorContext } from '../../context/Color';

const SelectCountryRegion = () => {
  
  const { changeRegion } = useContext(CountryContext);

    const { lightColor, darkColor, isLight } = useContext(colorContext);
    const theme = isLight ? lightColor : darkColor;

  
     return (
       <div
         className="selectButton"
         style={{
           background: theme.bg,
           boxShadow: theme.shadow,
         }}
       >
         {" "}
         <select
           name="Filter by Region"
           onChange={(e) => {
             changeRegion(e.target.value);
           }}
           style={{
             background: theme.bg,
             boxShadow: theme.shadow,
             color: theme.color
           }}
         >
           <option value="">Filter</option>
           <option value="Africa">Africa</option>
           <option value="Americas">Americas</option>
           <option value="Asia">Asia</option>
           <option value="Europe">Europe</option>
           <option value="Oceania">Oceania</option>{" "}
         </select>{" "}
       </div>
     );
}

export default SelectCountryRegion
