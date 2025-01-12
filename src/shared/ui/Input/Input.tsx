import React from "react";
import s from "./Input.module.scss";
import clsx from "clsx";
import { ChangeEvent, memo } from "react";

export enum InputTheme {
  PRIMARY = "primary",
  INVERTED_PRIMARY = "invertedPrimary",
}

interface Props {
  className?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  onChange?: (value: string) => void;
  value?: string;
  variant?: InputTheme;
}

export const Input = memo(
  ({
    className,
    id,
    type = "text",
    onChange,
    placeholder,
    value,
    variant = InputTheme.PRIMARY,
  }: Props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value);
    };

    return (
      <div className={clsx(s.InputWrapper, className)}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          id={id}
          className={clsx(s.input, variant && s[variant])}
          onChange={onChangeHandler}
        />
      </div>
    );
  },
);
