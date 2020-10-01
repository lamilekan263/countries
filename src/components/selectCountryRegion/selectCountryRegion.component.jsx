import React,{ useContext} from 'react'

import { CountryContext } from "../../context/country";

const SelectCountryRegion = () => {
  
  const { changeRegion } = useContext(CountryContext);

  
     return (
      <div>
        {" "}
         <select name="Filter by Region" onChange={(e) => {
           changeRegion(e.target.value);
         }}>
           <option value="">Filter</option>
           <option value="Africa">Africa</option>
           <option value="Americas">Americas</option>
           <option value="Asia">Asia</option>
           <option value="Europe">Europe</option>
           <option value="Oceania">Oceania</option>
          {" "}
        </select>
        {" "}
      </div>
    );
}

export default SelectCountryRegion


// import React, {Component} from 'react';

// import './selectCountryRegion.styles.css'




// class SelectDropDownByRegion extends Component {
//     constructor(){
//         super();

//         this.state = {
//             filter : ''
//         }

//       
     
//     render(){
//         return(
//            
//         )
// }

// }


// export default SelectDropDownByRegion