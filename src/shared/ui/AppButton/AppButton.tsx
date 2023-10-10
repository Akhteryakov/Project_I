import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes } from "react";
import cls from "./AppButton.module.scss";

export enum AppButtonVariant {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum AppButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: AppButtonVariant;
  square?: boolean;
  size?: AppButtonSize;
}

export const AppButton = (props: AppButtonProps) => {
  const {
    className,
    children,
    variant,
    square,
    size = AppButtonSize.M,
    ...otherProps
  } = props;

  const mods = {
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(cls.AppButton, mods, [
        className,
        cls[variant as keyof typeof AppButton],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
