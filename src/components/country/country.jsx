import React, { useContext } from 'react';
import { colorContext } from "../../context/Color";

import './country.css'
const Country = props => {
  
   const {  lightColor, darkColor, isLight } = useContext(
     colorContext
   );
   const theme = isLight ? lightColor : darkColor;
  return (
    <div className="card country-card">
      <img
        className="card-img-top"
        src={props.countries.flag}
        alt="the flag "
      ></img>
      <div
        className="card-body country-details"
        style={{ background: theme.bg, color: theme.color }}
      >
        <h2 className="card-title">{props.countries.name}</h2>
        <p className="card-text">Population: {props.countries.population}.</p>
        <p className="card-text">Region : {props.countries.region}</p>
        <p className="card-text">Capital: {props.countries.capital}</p>
      </div>
    </div>
  );
   }

 
export default Country;