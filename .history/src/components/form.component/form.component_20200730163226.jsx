import React, { useState } from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'
import './form.styles.css';




const MyForm =props =>{
    const [text, textState] = useState('')
    const onChange = e => textState(e.target.value);

    const onSubmit = e =>{
        e.preventDefault();
    
    }

    return(
        <div className="container-fluid">
            <form className="myForm" onSubmit = {onSubmit}>
                    <Input onHandleChange={props.handleChange}/>
                    <button></button>
                    <SelectDropDownByRegion/>
            </form>

        </div>
    );
}


export default MyForm