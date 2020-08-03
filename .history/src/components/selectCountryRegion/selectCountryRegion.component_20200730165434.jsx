import React from 'react';

import './selectCountryRegion.styles.css'

const SelectDropDownByRegion = () =>(
    <div>
        <select name="Filter by Region">
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
     </div>
)


export default SelectDropDownByRegion