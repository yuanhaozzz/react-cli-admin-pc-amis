import React, { Component } from "react";

import renderAmis from "src/amis";

function Page1() {
  return (
    <div>
      {renderAmis({
        // 这里是 amis 的 Json 配置。
        type: "page",
        title: "简单页面",
        body: "内容",
      })}
    </div>
  );
}

export default Page1;
