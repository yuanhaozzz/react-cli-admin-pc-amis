import { lazy } from "react";

// 菜单1
const Menu1 = [
  {
    name: "首页",
    path: "/menu1/home",
    exact: true,
    component: lazy(() => import("@/pages/Menu1/Home")),
  },
  {
    name: "测试",
    path: "/menu1/test",
    component: lazy(() => import("@/pages/Menu1/Test")),
  },
];

// 过渡菜单
const Transition = [
  {
    name: "页面过渡",
    path: "/transition/page",
    component: lazy(() => import("@/pages/Transition/page")),
  },
];

// amis页面
const AmisPage = [
  {
    name: "amis",
    path: "/amis/page1",
    component: lazy(() => import("@/pages/AmisPages/Page1")),
  },
];

const routes = [...Menu1, ...Transition, ...AmisPage];

export default routes;
