import { createRouteConfig } from "@tanstack/react-router";
import Contact from "./pages/Contact";
import Graphs from "./pages/Graphs";
import History from "./pages/History";
import Home from "./pages/Home";
import Location from "./pages/Location";

export const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    component: Home,
  }),
  createRoute({
    path: "graphs",
    component: Graphs,
  }),
  createRoute({
    path: "history",
    component: History,
  }),
  createRoute({
    path: "location",
    component: Location,
  }),
  createRoute({
    path: "contact",
    component: Contact,
  }),
]);
