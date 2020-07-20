import React from 'react';
import './country.css'
const Country = props => (
          <div className="card country-card">
            <img className="card-img-top" src={props.country.flag} alt="the flag "></img>
            <div className="card-body country-details">
              <h2 className="card-title">{props.country.name}</h2>
              <p className="card-text">Population: {props.country.population}.</p>
              <p className="card-text">Region : {props.country.region}</p>
              <p className="card-text">Capital: {props.country.capital}</p>
            </div>
          </div>
   );

 
export default Country;