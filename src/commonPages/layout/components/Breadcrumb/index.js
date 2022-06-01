import React, { useEffect, useState, memo } from "react";

import { Layout, Menu, Breadcrumb, Dropdown, Button } from "antd";
import routerList from "src/router/config";
import "./style.scss";

let locationPathName = "";
function BreadcrumbPage(props) {
  const { history } = props;

  const [path, setPath] = useState("");

  const logout = () => {
    // 清除登录信息 跳转
    history.push("/login");
  };

  useEffect(() => {
    locationPathName = props.location.pathname;
  }, [props]);

  useEffect(() => {
    setPath(window.location.pathname);
    props.history.listen((location) => {
      if (locationPathName !== location.pathname) {
        setPath(location.pathname);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * @description 从path中查找路由中的name
   * @param {*} path
   */
  const getRouteName = (path) => {
    const route = routerList.find((route) => route.path === path);
    return route?.name;
  };

  const menu = (
    <Menu
      items={[
        {
          label: <div onClick={() => logout()}>退出登录</div>,
        },
      ]}
    />
  );
  return (
    <div className="layout-breadcrumb-wrapper flex-space-between">
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>{getRouteName(path)}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="layout-breadcrumb-right">
        <Dropdown overlay={menu} placement="bottom">
          <Button>
            当前角色：<span>超级管理员</span>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default memo(BreadcrumbPage);
