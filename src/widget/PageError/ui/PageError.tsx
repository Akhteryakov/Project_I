import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppButton } from "shared/ui/AppButton";
import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError: React.FC<PageErrorProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("pageError")}</p>
      <AppButton onClick={reloadPage}>{t("updatePage")}</AppButton>
    </div>
  );
};
