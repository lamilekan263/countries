import React from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'
import './form.styles.css';



const MyForm =props =>(
    <div className="container-fluid">
        <form className="myForm">
                <Input onHandleChange={props.handleChange}/>
                button
                <SelectDropDownByRegion/>
        </form>
    </div>
);


export default MyForm