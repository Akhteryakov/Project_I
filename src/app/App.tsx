import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/context";
import { Navbar } from "widget/Navbar";
import { Sidebar } from "widget/Sidebar";
import { Suspense, useEffect } from "react";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme } = useTheme();

  // useEffect(() => {
  //   throw new Error();
  // }, []);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense>
        <Navbar className="" />
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
