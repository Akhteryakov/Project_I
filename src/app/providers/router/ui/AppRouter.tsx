import { Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { PageLoader } from 'widget/PageLoader';
import { routeConfig } from './routeConfig';

const AppRouter = () => {
  const elements = useRoutes(Object.values(routeConfig) as RouteObject[]);

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">{elements}</div>
    </Suspense>
  );
};

export default AppRouter;
