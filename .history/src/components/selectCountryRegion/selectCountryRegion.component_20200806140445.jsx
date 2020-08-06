import React, {Component} from 'react';

import './selectCountryRegion.styles.css'

class SelectDropDownByRegion extends  = () =>{
    
     const [dropDown, dropDownsetstate] = useState('')

    return(
        <div>
            <select name="Filter by Region">
                            <option value="">Filter</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}


export default SelectDropDownByRegion