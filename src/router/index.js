import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component, Suspense } from "react";

import { Provider } from "react-redux";
import Store from "@/store";
import Login from "src/commonPages/Login";
import Layout from "src/commonPages/layout";

import "@/assets/css/base.scss";

class Entry extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Suspense fallback={<div>{/* loading */}</div>}>
            <Switch>
              <Route path="/login" render={(props) => <Login {...props} />} />
              <Route path="*" render={(props) => <Layout {...props} />} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Entry;
