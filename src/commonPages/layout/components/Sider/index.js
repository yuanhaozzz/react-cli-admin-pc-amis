import React, { Component } from "react";

import { Layout, Menu, Breadcrumb, Dropdown, Button } from "antd";
import { menuList } from "../../constants";
import "./style.scss";

const { Sider } = Layout;

function SiderPage(props) {
  const { history } = props;

  const selectMenu = (item) => {
    console.log(item);
    history.push(item.key);
  };

  return (
    <Sider width={200} className="site-layout-background">
      <h2 className="layout-title">浩哥的后台管理系统</h2>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={menuList}
        onSelect={(item) => selectMenu(item)}
      />
    </Sider>
  );
}

export default SiderPage;
