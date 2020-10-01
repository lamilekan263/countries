import React from 'react'
import Axios from 'axios'

import { Link } from 'react-router-dom';

import './Specific.css'

class Specific extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryInfo: {},
    };
  }
  componentDidMount() {
    Axios
      .get(
        `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.country}`
      )
      .then((result) => {
        this.setState({ countryInfo: result.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
      const {
        flag,
        name,
        capital,
        region,
        subregion,
        population,
        nativeName,
        borders,
        currencies,
          topLevelDomain,
        languages
      } = this.state.countryInfo;
    return (
      <div className="specific">
        <div className="container">
          <div className="specific__button">
            <Link to="/">
              <button> back</button>
            </Link>
          </div>
          <div className="specific__country">
            <div className="specific__country_flag">
              <img src={flag} alt="" />
            </div>
            <div className="specific__country_details">
              <div className="specific__country_heading">
                <h1>{name}</h1>
              </div>
              <div className="details">
                <div className="details__container">
                  <h5>
                    Native name: <span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population: <span>{population}</span>
                  </h5>
                  <h5>
                    Region:<span> {region}</span>
                  </h5>
                  <h5>
                    Sub Region:<span> {subregion}</span>
                  </h5>
                  <h5>
                    Capital:<span> {capital} </span>
                  </h5>
                </div>
                <div className="details__container">
                  <h5>
                    Top Level Domain:{" "}
                    <span>
                      {topLevelDomain
                        ? topLevelDomain.map((domain) => domain)
                        : null}
                    </span>
                  </h5>
                  <h5>
                    Currencies:
                    <span>
                      {currencies
                        ? currencies.map((currency) => currency.name)
                        : null}
                    </span>
                  </h5>
                  <h5>
                    Languages:
                    <span>
                      {" "}
                      {languages
                                            ? languages.map((language) => { 
                                                return (
                                                  <div className='languages'>{language.name }</div>
                                                );
                                            })
                        : null}
                    </span>
                  </h5>
                </div>
              </div>
              <div className="details__container">
                <h5>Border Countries: </h5>
                <div className="border__container">
                  {borders
                    ? borders.map((border) => {
                        return (
                          <div className="border">
                            <h5>{border}</h5>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Specific
