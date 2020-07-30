import React from 'react';

import './selectCountryRegion.styles.css'

const SelectDropDownByRegion = () =>(
    <select name="Filter by Region">
        <option value="">Filter by Region</option>
        <option value="Africa"></option>
        <option value="Americas">Americas</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>
)
Africa, Americas, Asia, Europe, Oceania

export default SelectDropDownByRegion