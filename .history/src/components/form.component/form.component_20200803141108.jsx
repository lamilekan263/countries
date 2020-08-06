import React, { useState } from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'
import './form.styles.css';




const MyForm =props =>{
    const [text, textState] = useState('')
    
    const onChange  = e => console.log(textState( e.target.value))

    const onSubmit = e =>{
        e.preventDefault();
        console.log(text)
    }

    return(
        <div className="container-fluid">
            <form className="myForm" onSubmit = {onSubmit}>
                <div>
                    <Input onHandleChange={onChange} value={text}/>
                    <input type="submit" value="Search For your desire country" className="" />
                 </div>
                <SelectDropDownByRegion />
                    
            </form>

        </div>
    );
}


export default MyForm