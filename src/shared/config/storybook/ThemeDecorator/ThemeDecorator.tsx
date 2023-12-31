import React, { FC } from "react";
import { Theme } from "shared/context";

interface Props {
  children?: React.ReactNode;
  theme: Theme;
}

const ThemeDecorator: FC<Props> = ({ children, theme }) => (
  <div className={`app ${theme}`}>{children}</div>
);

export default ThemeDecorator;
