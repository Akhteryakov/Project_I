import { classNames } from "shared/lib/classNames/classNames";
import { useState, FC } from "react";
import { ThemeSwitcher } from "feature/ThemeSwitcher";
import { LangSwitcher } from "feature/LangSwitcher";
import { AppButton } from "shared/ui/AppButton";
import { AppButtonSize, AppButtonVariant } from "shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";
import { AppLink } from "shared/ui/AppLink";
import { AppLinkVariant } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/routes";
import MainIcon from "shared/assets/icons/home-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <nav className={cls.nav}>
        <AppLink
          to={RoutePath.main}
          variant={AppLinkVariant.INVERTED}
          className={cls.navItem}
        >
          <MainIcon className={cls.navIcon} />
          <span className={cls.navLink}>{t("главную")}</span>
        </AppLink>

        <AppLink
          to={RoutePath.about}
          variant={AppLinkVariant.INVERTED}
          className={cls.navItem}
        >
          <AboutIcon className={cls.navIcon} />
          <span className={cls.navLink}>{t("о нас")}</span>
        </AppLink>
      </nav>
      
      <AppButton
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        variant={AppButtonVariant.BACKGROUND_INVERTED}
        square
        size={AppButtonSize.XL}
        onClick={onToggle}
      >
        {isCollapsed ? ">" : "<"}
      </AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} />
      </div>
    </div>
  );
};
