import React from "react";
import { Route, Switch } from "react-router-dom";
import { Bisnis, Entertainment, Home, Olahraga, Teknologi } from "../../pages";

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/bisnis">
        <Bisnis />
      </Route>
      <Route path="/entertainment">
        <Entertainment />
      </Route>
      <Route path="/olahraga">
        <Olahraga />
      </Route>
      <Route path="/teknologi">
        <Teknologi />
      </Route>
    </Switch>
  );
};

export default PageRoutes;
