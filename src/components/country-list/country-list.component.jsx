import React, { useContext } from 'react';

import { CountryContext } from "../../context/country";
import Country from '../country/country'
import LoaderSpinner from '../loader/Loader'
import { Link } from 'react-router-dom';


import './country-list.styles.css'
const CountryList = () => {
  const { countries } = useContext(CountryContext);
  

  if (countries.length === 0) {
     return (
      <LoaderSpinner />
    )
  }else {
    return (
      <div className="country-list ">
         <div className="flex-country">
           {}
           {countries.map((country, index) => (
             <Link to={`/country/${country.alpha3Code}`} key={index}>
               <Country countries={country} />
             </Link>
           ))}
         </div>
    </div>
      )
     }

   
}
 
export default CountryList;