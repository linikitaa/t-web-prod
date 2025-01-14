import s from "./Button.module.scss";
import clsx from "clsx";
import { memo, ReactNode } from "react";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  variant?: ButtonTheme;
  size?: SizeButton;
}

export enum ButtonTheme {
  PRIMARY = "primary",
  INVERTED_PRIMARY = "invertedPrimary",
  OUTLINE = "outline",
  INVERTED_OUTLINE = "invertedOutline",
  INVERTED_OUTLINE_RED = "invertedOutlineRed",
  DISABLED = "disabled",
  CLEAR = "clear",
}

export enum SizeButton {
  S = "small",
  M = "medium",
  L = "large",
}
export const Button = memo(
  ({
    className,
    variant = ButtonTheme.PRIMARY,
    size = SizeButton.M,
    disabled,
    onClick,
    children,
    ...otherProps
  }: Props) => {
    const onClickHandler = () => {
      if (onClick) {
        onClick();
      }
    };
    return (
      <button
        {...otherProps}
        disabled={disabled}
        onClick={onClickHandler}
        className={clsx(
          s.Button,
          className,
          variant && s[variant],
          size && s[size],
          disabled && s.disabled,
        )}
      >
        {children}
      </button>
    );
  },
);
