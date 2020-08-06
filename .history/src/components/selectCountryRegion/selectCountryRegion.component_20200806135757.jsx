import React from 'react';

import './selectCountryRegion.styles.css'

const SelectDropDownByRegion = () =>{
    
    const currentDropDown [] = const [state, setstate] = useState(initialState)

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