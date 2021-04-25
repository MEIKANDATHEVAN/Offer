
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListOfferComponent from './components/ListOfferComponent';
import ViewOfferComponent from "./components/ViewOfferComponent";
import CreateOfferComponent from './components/CreateOfferComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListOfferComponent}></Route>
            <Route path="/offers"  component={ListOfferComponent}></Route>
            <Route path="/addoffer" component={CreateOfferComponent}></Route>
            <Route path="/view-offer/:id" component={ViewOfferComponent}></Route>
            
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;