import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkVariant } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "feature/ThemeSwitcher";

interface NavbarProps {
  className: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/about" variant={AppLinkVariant.INVERTED}>
          Aboute
        </AppLink>
        <AppLink to="/" variant={AppLinkVariant.INVERTED}>
          Home
        </AppLink>
      </div>
    </div>
  );
};
