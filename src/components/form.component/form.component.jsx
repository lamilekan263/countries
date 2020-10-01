import React from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'

import './form.styles.css';





const MyForm =props =>{


    
   
    return (
      <div className="container-fluid">
        <div className="myForm">
          <div>
            <Input   />
          </div>
          <SelectDropDownByRegion />
        </div>
      </div>
    );
}


export default MyForm