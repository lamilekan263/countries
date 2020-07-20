import React from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'
import './form.styles.css';



const MyForm =() =>(
    <div className="container-fluid">
        <form className="myForm">
            <Input/>
            <SelectDropDownByRegion/>
        </form>
    </div>
);


export default MyForm