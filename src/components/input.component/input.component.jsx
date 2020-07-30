import React from 'react';

import './input.styles.css'


const Input = props =>(
    <div className="fontuser"> 
            <input type="text" 
                    placeholder="search for country"
                     required />  
            <i className="fa fa-search fa-lg" >{props.onHandleChange}</i> 
    </div> 
)

export default Input;