import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";

const NavBar = () => (
  <div>
    <NavLink to='/contact' exact activeClassName="selected"> Contact Page </NavLink>

    <NavLink to="/" exact activeClassName="selected"> Home Page </NavLink>
  </div>
);



// the props   "component={(props) " is coming from<Route> instance
class App extends Component {


  render() {
    return (

      <Router>


        <div>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/items"
              // component={(props) => <div> HomePage! <pre> {JSON.stringify(props, null, 4)}</pre> </div>}
              component={(props) => <div> HomePage!

                <pre> {JSON.stringify(props, null, 4)}</pre> </div>}

            />
            <Route
              path="/contact"
              component={(props) =>
                <div> ContactPage!

                  <pre> {JSON.stringify(props, null, 4)}</pre> </div>} />


            <Route
              exact
              path="/hello/:namesgood"
              component={(props) => <div>
                Hello there !{props.match.params.namesgood}

                <pre> {JSON.stringify(props, null, 4)}</pre> </div>}

            />

            <Redirect to='/items' />
          </Switch>
        </div>

      </Router>

    );
  }
}

export default App;
