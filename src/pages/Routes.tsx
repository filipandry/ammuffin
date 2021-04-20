import { Home } from "./Home";
import { E404 } from "./E404";

export const routes = [
  {
    id: "home",
    path: "/",
    label: "Home",
    component: Home
  },
  {
    id: "404",
    path: "*",
    label: "404",
    component: E404
  }
];
