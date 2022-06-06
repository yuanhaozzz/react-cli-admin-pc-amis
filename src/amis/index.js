import { render as renderAmis, ToastComponent, AlertComponent } from "amis";
import React, { Fragment } from "react";
import { propsConfig, envConfig } from "./config";

import "node_modules/amis/lib/themes/cxd.css";
import "node_modules/amis/lib/helper.css";
import "node_modules/amis/sdk/iconfont.css";

function renderAmisPage(json) {
  return <Fragment>{renderAmis(json, propsConfig, envConfig)}</Fragment>;
}

export default renderAmisPage;
