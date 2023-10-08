import { classNames } from "shared/lib/classNames/classNames";
import { useState, FC } from "react";
import { ThemeSwitcher } from "feature/ThemeSwitcher";
import { LangSwitcher } from "feature/LangSwitcher";
import { AppButton } from "shared/ui/AppButton";
import { AppButtonVariant } from "shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <AppButton
        data-testid="sidebar-toggle"
        className={cls.switch_btn}
        variant={AppButtonVariant.CLEAR}
        onClick={onToggle}
      >
        {t("switch")}
      </AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.LangSwitcherCollor} />
      </div>
    </div>
  );
};
