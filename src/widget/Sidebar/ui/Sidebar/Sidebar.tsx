import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "feature/ThemeSwitcher";
import { LangSwitcher } from "feature/LangSwitcher";
import { AppButton } from "shared/ui/AppButton";
import { AppButtonVariant } from "shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t, i18n } = useTranslation("");
  const onToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
        className,
      ])}
    >
      <AppButton
        className={cls.switch_btn}
        variant={AppButtonVariant.CLEAR}
        onClick={onToggle}
      >
        {t("switch")}
      </AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
