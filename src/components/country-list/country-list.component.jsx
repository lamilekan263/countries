import React from 'react';
import Country from '../country/country'
import './country-list.styles.css'
const CountryList = props => {
    return ( 
        <div className="country-list container-fluid">
                    <div className="flex-country">
                        {
                            props.countries.map((country,index) => (
                                    <Country key={ index } country ={country}/>
                                    ))
                                }
                    </div>  
        </div>
     );
}
 
export default CountryList;