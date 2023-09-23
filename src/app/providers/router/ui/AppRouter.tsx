import { Suspense } from "react";
import { Route, Routes, useRoutes, RouteObject } from "react-router-dom";
import { routeConfig } from "./routeConfig";

const AppRouter = () => {
  const elements = useRoutes(Object.values(routeConfig) as RouteObject[]);

  return <Suspense fallback={<div>"Loading..."</div>}>{elements}</Suspense>;
};

export default AppRouter;
