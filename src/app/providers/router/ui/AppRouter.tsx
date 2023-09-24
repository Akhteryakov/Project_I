import { Suspense } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import { routeConfig } from "./routeConfig";

const AppRouter = () => {
  const elements = useRoutes(Object.values(routeConfig) as RouteObject[]);

  return (
    <Suspense fallback={<div>"Loading..."</div>}>
      <div className="page-wrapper">{elements}</div>
    </Suspense>
  );
};

export default AppRouter;
