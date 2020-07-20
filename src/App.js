import React, {Component} from 'react';
import NavBar from './components/Navbar/navBar.component'
import CountryList from './components/country-list/country-list.component'

class App extends Component {
  constructor(){
    super();
    this.state={
      countries :[

        
      ]
      
      }
  }
    componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(countries => this.setState({countries}))
  }
 
  render() { 
    const {countries} = this.state
    return (  
      <div>
        <NavBar  />

        <CountryList countries = {countries} />

        
      </div>
    );
  }
}
 
export default App;