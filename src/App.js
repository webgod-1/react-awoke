import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import Welcome from './components/welcome';
import NavBar from './components/navbar';
import About from './components/about';
import Products from './components/products';
import Dashboard from './components/dashboard';
import HowItWorks from './components/how-it-works';
import Footer from './components/footer';
import ScrollIntoView from './components/scroll-into-view';
import Login from './components/login';
import SignUp from './components/signup';

import { ROUTE_ROOT } from './utils/constants';

const NavRoute = ({ exact, path, component: Component }) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <NavBar />
      <Component {...props} />
    </div>
  )} />
)

class App extends Component {
  render() {
    return (
      <Fragment>
          <ScrollIntoView>
            <Switch>
              <NavRoute exact path={`${ROUTE_ROOT}/`} component={Welcome} />
              <NavRoute exact path={`${ROUTE_ROOT}/about`} component={About} />
              <NavRoute exact path={`${ROUTE_ROOT}/how-it-works`} component={HowItWorks} />
              <NavRoute exact path={`${ROUTE_ROOT}/products`} component={Products} />
              <Route path={`${ROUTE_ROOT}/dashboard`} component={Dashboard} />
              <NavRoute exact path={`${ROUTE_ROOT}/login`} component={Login} />
              <NavRoute exact path={`${ROUTE_ROOT}/signup`} component={SignUp} />
            </Switch>
          </ScrollIntoView>
          <Footer/>
        </Fragment>
    );
  }
}

export default App;
