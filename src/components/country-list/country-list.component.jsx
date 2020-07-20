import React from 'react';
import Country from '../country/country'
import './country-list.styles.css'
const CountryList = props => {
    return ( 
        <div className="country-list">
            <div classsName="container-fluid">
                        {
                            props.countries.map((country,index) => (
                                <div className="country-card" >
                                    <Country key={ index } country ={country}/>
                                </div>
                            ))
                        }
            </div>     
        </div>
     );
}
 
export default CountryList;