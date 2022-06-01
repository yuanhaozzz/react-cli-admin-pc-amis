import React, { Component, Fragment } from "react";

import "./style.scss";
import { Layout, Menu, Breadcrumb, Dropdown, Button } from "antd";
import SiderPage from "./components/Sider";
import ContentPage from "./components/Content";
import BreadcrumbPage from "./components/Breadcrumb";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

function LayoutPage(props) {
  return (
    <div className="layout-wrapper">
      <Layout>
        <Layout>
          <SiderPage {...props} />
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <BreadcrumbPage {...props} />
            <ContentPage {...props} />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutPage;
