import React, { createContext, Component } from "react";
import Axios from "axios";

export const CountryContext = createContext();

class CountryContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      filteredCountry : ''
    };
  }

  // initial component mounting
  componentDidMount() {
    this.loadCountry()
  }


  // Load the countries on initial mounting

  loadCountry = () => {
    Axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      this.setState({ countries: res.data });
    });
  }
  // filter the countries according to region
  changeRegion = (region) => {
  


    if (region) {
          Axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
            .then((res) => this.setState({ countries: res.data }))
            .catch((err) => console.log(err.message));
      }else{
        this.loadCountry()
      }
  
  }

      // filter the countries according to user input 
  filterCountry = (countryName) => {
    
    if (countryName) {
      const filter = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
      this.setState({ filteredCountry: filter });
      Axios.get(
        `https://restcountries.eu/rest/v2/name/${filter}`
      ).then((res) => {
        const positive = res.data.filter(country => country.name.startsWith(this.state.filteredCountry));
        this.setState({ countries: positive });
      });

    }else{
      this.setState({ countries: [] });
      this.loadCountry();
    }
    
   

  };

  render() {
    // const {countries, searchValue} = this.state
    // 
    return (
      <CountryContext.Provider
        value={{ ...this.state, changeRegion: this.changeRegion, filterCountry : this.filterCountry }}
      >
        {this.props.children}
      </CountryContext.Provider>
    );
  }
}

export default CountryContextProvider;
