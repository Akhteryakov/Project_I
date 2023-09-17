import "./styles/index.scss";
import React, { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { HomePageAsync } from "./pages/HomePage/HomePage.async";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { cls1: true, cls2: true }, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/about">Aboute</Link>
      <Link to="/home">Home</Link>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/home" element={<HomePageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
