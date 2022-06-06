import React, { Component } from "react";

import { SettingOutlined, HeartOutlined } from "@ant-design/icons";

export const menuList = [
  {
    key: 1,
    icon: React.createElement(SettingOutlined),
    label: `菜单一`,
    children: [
      {
        key: "/menu1/home",
        label: `页面home`,
      },
      {
        key: "/menu1/test",
        label: `页面test`,
      },
    ],
  },
  {
    key: 1000,
    icon: React.createElement(HeartOutlined),
    label: `过渡`,
    children: [
      {
        key: "/transition/page",
        label: `过渡页面`,
      },
    ],
  },
  {
    key: 10000,
    icon: React.createElement(HeartOutlined),
    label: `amis页面`,
    children: [
      {
        key: "/amis/page1",
        label: `page1`,
      },
    ],
  },
];
