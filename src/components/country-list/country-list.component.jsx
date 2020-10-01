import React, { useContext } from 'react';

import { CountryContext } from "../../context/country";
import Country from '../country/country'
import LoaderSpinner from '../loader/Loader'
import { Link } from 'react-router-dom';


import './country-list.styles.css'
const CountryList = () => {
const { countries } = useContext(CountryContext);

    return (
      <div className="country-list container-fluid">
        <div className="flex-country">{
          
        }
          {countries.map((country, index) => (
            <Link to={`/country/${country.alpha3Code}`} key={index}>
              <Country countries={country} />
            </Link>
          ))}
        </div>
      </div>
    );
}
 
export default CountryList;