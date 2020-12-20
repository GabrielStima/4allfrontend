import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./views/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Container {...props} component={Home} />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
