/* eslint-disable i18next/no-literal-string */
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/context";
import { Navbar } from "widget/Navbar";
import { Sidebar } from "widget/Sidebar";
import { Suspense, useState } from "react";
import { Modal } from "shared/ui/Modal";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <button type="button" onClick={() => setIsOpen(true)}>
          open
        </button>
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
