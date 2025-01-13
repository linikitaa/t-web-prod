import React, { InputHTMLAttributes } from "react";
import s from "./Input.module.scss";
import clsx from "clsx";
import { ChangeEvent, memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

export enum InputTheme {
  PRIMARY = "primary",
  INVERTED_PRIMARY = "invertedPrimary",
}

interface InputProps extends HTMLInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  onChange?: (value: string) => void;
  value?: string | number;
  variant?: InputTheme;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    id,
    type = "text",
    onChange,
    placeholder,
    value,
    variant = InputTheme.PRIMARY,
    readonly,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value);
  };

  return (
    <div className={clsx(s.InputWrapper, className, readonly && s.readonly)}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        className={clsx(s.input, variant && s[variant])}
        onChange={onChangeHandler}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
