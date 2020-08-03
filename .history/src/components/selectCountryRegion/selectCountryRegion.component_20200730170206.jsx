import React, { useEffect} from 'react';

import './selectCountryRegion.styles.css'

const SelectDropDownByRegion = () =>{
    useEffect(async () => {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=redux',
        );
     
        setData(result.data);
      });

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