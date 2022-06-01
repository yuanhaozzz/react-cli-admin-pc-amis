import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style.scss";
import RouterList from "src/router/config";

function Router() {
  return (
    <Suspense fallback={<div>{/* loading */}</div>}>
      <Switch>
        {RouterList.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            render={(props) => <route.component {...props} />}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

export default Router;
