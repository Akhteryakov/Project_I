import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/context";
import { AppRouter } from "./providers/router";
import { Navbar } from "widget/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar className="" />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default App;
