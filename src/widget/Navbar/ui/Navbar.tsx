import cls from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/about" theme={AppLinkTheme.INVERTED}>
          Aboute
        </AppLink>
        <AppLink to="/" theme={AppLinkTheme.INVERTED}>
          Home
        </AppLink>
      </div>
    </div>
  );
};
