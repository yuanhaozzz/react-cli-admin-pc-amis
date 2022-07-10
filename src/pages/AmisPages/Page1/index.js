import React, { Component } from "react";

import renderAmis from "src/amis";

import amisJSON from "./amis.json";

function Page1() {
  return <div>{renderAmis(amisJSON)}</div>;
}

export default Page1;
