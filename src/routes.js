import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./views/Home";
import ListProducts from "./views/ListProducts";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Container {...props} component={Home} />}
      />
      <Route
        exact
        path="/ListProducts/:id"
        render={(props) => <Container {...props} component={ListProducts} />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
