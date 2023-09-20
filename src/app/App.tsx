import "./styles/index.scss";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "shared/context";
import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/about">Aboute</Link>
      <Link to="/home">Home</Link>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
