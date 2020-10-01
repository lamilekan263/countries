import React, { createContext, Component } from "react";
import Axios from "axios";

export const CountryContext = createContext();

class CountryContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchValue: "",
    };
  }

  // initial component mounting
  componentDidMount() {
    Axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      this.setState({ countries: res.data });
    });
  }

  // filter the countries according to region
  changeRegion = (region) =>
    Axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((res) => this.setState({ countries: res.data }))
      .catch((err) => console.log(err.message));
  filterCountry = () => {};

  render() {
    // const {countries, searchValue} = this.state
    // const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (
      <CountryContext.Provider
        value={{ ...this.state, changeRegion: this.changeRegion }}
      >
        {this.props.children}
      </CountryContext.Provider>
    );
  }
}

export default CountryContextProvider;
