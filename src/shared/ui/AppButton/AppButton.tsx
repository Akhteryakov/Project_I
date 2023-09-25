import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppButton.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum AppButtonVariant {
  CLEAR = "clear",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: AppButtonVariant;
}

export const AppButton = (props: AppButtonProps) => {
  const { className, variant, children, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.AppButton, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
