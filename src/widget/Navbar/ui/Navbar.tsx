import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkVariant } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "feature/ThemeSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/about" variant={AppLinkVariant.INVERTED}>
          {t("о нас")}
        </AppLink>
        <AppLink to="/" variant={AppLinkVariant.INVERTED}>
          {t("главную")}
        </AppLink>
      </div>
    </div>
  );
};
