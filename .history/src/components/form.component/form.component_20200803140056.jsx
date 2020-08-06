import React, { Component } from 'react';
import Input from "../input.component/input.component"
import SelectDropDownByRegion from '../selectCountryRegion/selectCountryRegion.component'
import './form.styles.css';


class  extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    onChange = e => textState(text = e.target.value);

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

export default ;

const MyForm =props =>{
    const [text, textState] = useState('')
    c

    
}


export default MyForm