import React from 'react'


import Home from './views/Home'
import Nav from './components/Navbar/navBar.component'

import CountryContextProvider from "./context/country";


import { Switch, Route } from 'react-router-dom';
import Specific from './components/specific/Specific';
import ColorContextProvider from './context/Color';

function App() {
  return (
    <ColorContextProvider>
    <div>
      <CountryContextProvider>
        
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/country/:country" component={Specific} />
          </Switch>

      </CountryContextProvider>
    </div>
    </ColorContextProvider>
  );
}

export default App

