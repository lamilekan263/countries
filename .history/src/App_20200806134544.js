import React, {Component} from 'react';
import NavBar from './components/Navbar/navBar.component'
import CountryList from './components/country-list/country-list.component'
import MyForm from './components/form.component/form.component'

import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state={
      countries :[

        
      ],
      searchValue : ''
      
      }
  }
    componentDidMount(){
    // fetch('https://restcountries.eu/rest/v2/all')
    // .then(response => response.json())
    // .then(countries => console.log(countries))

    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res =>{
      console.log(res.data.split(0, 10))
    })
  }

  handleCountry = e =>{
    this.setState({searchValue : e.target.value})
    console.log(e)
    
  }
 
  render() { 
    const {countries, searchValue} = this.state
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (  
      <div>
        <NavBar  />
        <MyForm handleChange ={this.handleCountry}/>
          <CountryList countries = {filteredCountries} />

        
      </div>
    );
  }
}
 
export default App;