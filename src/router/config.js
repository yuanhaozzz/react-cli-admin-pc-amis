import { lazy } from "react";

// 你的一级菜单
const home = [
  {
    name: "首页",
    path: "/home",
    exact: true,
    component: lazy(() => import("@/pages/Home")),
  },
];

// 你的一级菜单
const Test = [
  {
    name: "测试",
    path: "/test",
    component: lazy(() => import("@/pages/Test")),
  },
];

const routes = [...home, ...Test];

export default routes;
