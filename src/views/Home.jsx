import React, { useContext } from 'react'
import MyForm from '../components/form.component/form.component';
import CountryList from '../components/country-list/country-list.component';
import { colorContext } from '../context/Color';
import './Home.css'

function Home() {
    const { lightColor, darkColor, isLight } = useContext(colorContext);
    const theme = isLight ? lightColor : darkColor;
  return (
    <div className="home" style={{ background: theme.bg }}>
      <div className="container">
        <MyForm />
        <CountryList />
      </div>
    </div>
  );
}

export default Home
