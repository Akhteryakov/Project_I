import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/context';
import ThemeIcon from 'shared/assets/icon/themeIcon.svg';
import { AppButton } from 'shared/ui/AppButton';
import { AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      variant={AppButtonVariant.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon className={classNames(cls.icon)} />
    </AppButton>
  );
};
