import React, { useContext } from 'react';

import { CountryContext } from "../../context/country";
import './input.styles.css'


const Input = props => {
  const { filterCountry } = useContext(CountryContext);
  return (
    <div className="fontuser">
      <input
        type="text"
        placeholder="search for country"
        required
        onChange={(e) => filterCountry(e.target.value)}
      />
      <i className="fa fa-search fa-lg">{props.onHandleChange}</i>
    </div>
  );
}

export default Input;