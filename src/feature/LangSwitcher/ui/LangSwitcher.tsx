import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton';
import { useTranslation } from 'react-i18next';
import { AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <AppButton onClick={toggleLang} variant={AppButtonVariant.CLEAR}>
        {t('Язык')}
      </AppButton>
    </div>
  );
};
