import React from 'react';
import './country.css'
const Country = (props) => {
  return ( 
    <div>
        
                
                <img className="myImage" src={props.country.flag} alt="the flag "/>
                <div className="country-details">
                    <h2>{props.country.name}</h2>
                    <h3>Population: {props.country.population}</h3>
                    <h3>Region: {props.country.region}</h3>
                    <h3>Capital: {props.country.capital}</h3>
                </div>
    
                


    </div>
   );
}
 
export default Country;