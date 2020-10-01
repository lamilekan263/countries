import React, { useContext } from 'react';

import { CountryContext } from "../../context/country";
import './input.styles.css'
import { colorContext } from '../../context/Color';


const Input = props => {
  const { filterCountry } = useContext(CountryContext);
     const { lightColor, darkColor, isLight } = useContext(colorContext);
     const theme = isLight ? lightColor : darkColor;
  return (
    <div className="fontuser">
      <input
        type="text"
        placeholder="search for country"
        required
        onChange={(e) => filterCountry(e.target.value)}
        style={{
          background: theme.bg,
          boxShadow: theme.shadow,
        }}
      />
      <i className="fa fa-search fa-lg">{props.onHandleChange}</i>
    </div>
  );
}

export default Input;