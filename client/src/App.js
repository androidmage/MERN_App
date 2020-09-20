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
      <div className="full">
        <BrowserRouter>
          <AppNavbar/>
          <Switch>
            <Route exact path="/">
              <div className="bg" style={{ backgroundImage: "url('glasses-home.jpg')"}}>
                <HomePage />
              </div>
            </Route>
            <Route exact path="/shopping">
              <ShoppingPage />
            </Route>
            <Route path="/players">
              <div className="bg" style={{ backgroundImage: "url('basketball-court.jpg')"}}>
                <PlayerPage />
              </div>
              
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
