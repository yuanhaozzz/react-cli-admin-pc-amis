import ReactDOM from "react-dom";
import React, { Fragment } from "react";

import Routers from "@/router";
import Loading from "src/components/Loading";

function App() {
  return (
    <Fragment>
      <Loading />
      <Routers />
    </Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
