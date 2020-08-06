import React, {Component} from 'react';

import './selectCountryRegion.styles.css'

class SelectDropDownByRegion extends Component {
    constructor(){
        super();

        this.state = {
            filter : ''
        }

       onchange = (e) =>{
            this.setState({ filter : e.target.value})
            console.log(this.state.)
       }
    }
     
    render(){
        return(
            <div>
                <select name="Filter by Region" onChange = {this.onchange}>
                                <option value="">Filter</option>
                                <option value="Africa">Africa</option>
                                <option value="Americas">Americas</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                </select>
            </div>
        )
}

}


export default SelectDropDownByRegion