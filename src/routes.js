import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./views/Home";
import ListProducts from "./views/ListProducts";
import ProductDetail from "./views/ProductDetail";
import Bag from "./views/Bag";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Container {...props} component={Home} />}
      />
      <Route
        path="/ListProducts/:id/:page?"
        render={(props) => <Container {...props} component={ListProducts} />}
      />
      <Route
        path="/ProductDetail/:id"
        render={(props) => <Container {...props} component={ProductDetail} />}
      />
      <Route
        path="/bag"
        render={(props) => <Container {...props} component={Bag} />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
