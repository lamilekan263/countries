import React from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'

import './form.styles.css';





const MyForm =props =>{
    return (
        <div className="myForm">
            <Input   />
          <SelectDropDownByRegion />
        </div>
    );
}


export default MyForm