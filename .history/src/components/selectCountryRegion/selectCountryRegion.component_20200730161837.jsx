import React from 'react';

import './selectCountryRegion.styles.css'

const SelectDropDownByRegion = () =>(
    <select name="Filter by Region">
        <option value="">Filter by Region</option>
        <option value="volvo">Africs</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>
)


export default SelectDropDownByRegion