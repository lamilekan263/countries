import React, { Component } from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'
import './form.styles.css';


class form.component extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            
        );
    }
}

export default form.component;

const MyForm =props =>{
    const [text, textState] = useState('')
    const onChange = e => textState(text = e.target.value);

    const onSubmit = e =>{
        e.preventDefault();
    
    }

    return(
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


export default MyForm