import React from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'
import './form.styles.css';


const onSubmit = e =>{
    e.preventDefault()
}

const MyForm =props =>(
    <div className="container-fluid">
        <form className="myForm" onSubmit = {onSubmit}>
                <Input onHandleChange={props.handleChange}/>
                <button></button>
                <SelectDropDownByRegion/>
        </form>
    </div>
);


export default MyForm