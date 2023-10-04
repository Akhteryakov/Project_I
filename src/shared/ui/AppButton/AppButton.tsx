import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./AppButton.module.scss";

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
      type="button"
      className={classNames(cls.AppButton, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
