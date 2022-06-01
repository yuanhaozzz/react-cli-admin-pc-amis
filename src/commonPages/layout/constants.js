import React, { Component } from "react";

import { SettingOutlined, HeartOutlined } from "@ant-design/icons";

export const menuList = [
  {
    key: 1,
    icon: React.createElement(SettingOutlined),
    label: `菜单一`,
    children: [
      {
        key: "/home",
        label: `页面home`,
      },
    ],
  },
  {
    key: 100,
    icon: React.createElement(HeartOutlined),
    label: `菜单二`,
    children: [
      {
        key: "/test",
        label: `页面test`,
      },
    ],
  },
];
