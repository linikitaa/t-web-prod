import React from "react";
import s from "./Input.module.scss";
import clsx from "clsx";
import { ChangeEvent, memo } from "react";

interface Props {
  className?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export const Input = memo(
  ({ className, id, type = "text", onChange, placeholder, value }: Props) => {
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
          className={s.input}
          onChange={onChangeHandler}
        />
      </div>
    );
  },
);
