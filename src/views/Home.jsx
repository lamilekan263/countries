import React from 'react'
import MyForm from '../components/form.component/form.component';
import CountryList from '../components/country-list/country-list.component';

function Home() {
    return (
      <div className='container'>
        <MyForm  />
        <CountryList  />
      </div>
    );
}

export default Home
