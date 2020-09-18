import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import HomePage from './pages/HomePage';
import ShoppingPage from './pages/ShoppingPage';
import PlayerPage from './pages/PlayerPage';
import MethodologyPage from './pages/MethodologyPage';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <AppNavbar/>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/shopping">
              <ShoppingPage />
            </Route>
            <Route path="/players">
              <PlayerPage />
            </Route>
            <Route path="/methodology">
              <MethodologyPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
