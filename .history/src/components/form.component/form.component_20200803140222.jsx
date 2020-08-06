import React, { Component } from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'
import './form.styles.css';


class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text : ''
         };
    }
    onChange = e => this.setState({state.text = e.target.value);

    onSubmit = e =>{
        e.preventDefault();
    
    }
    render() {
        return (
            <div className="container-fluid">
            <form className="myForm" onSubmit = {onSubmit}>
                <div>
                    <Input onHandleChange={props.handleChange}/>
                    <button>Search For your desire country</button>
                 </div>
                <SelectDropDownByRegion />
                    
            </form>

        </div>
        );
    }
}

export default MyForm;

