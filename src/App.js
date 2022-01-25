import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componenets/Home';
import Navbigation from './componenets/Navbigation';
import GenarateForm from './componenets/GenarateForm';
import Foodqurey from './componenets/Foodqurey';
import FoodQueryTwo from './componenets/FoodQueryTwo';

function App() {
  return (
    <div className="">
      <Router>
        <Navbigation></Navbigation>
        <Switch>
          
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/form">
            <GenarateForm />
          </Route>
          <Route path="/foodquery/:id">
              <Foodqurey />
            </Route>
          <Route path="/foodquerytwo/:id">
              <FoodQueryTwo />
            </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
