import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant: AppLinkVariant;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className,
    variant = AppLinkVariant.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
