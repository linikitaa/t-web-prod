import React, { memo } from "react";
import clsx from "clsx";
import s from "./LoginForm.module.scss";
import { Input } from "shared/ui/Input/Input";
import { useCallback, useState } from "react";
import { RootState, useAppDispatch } from "app/providers/StoreProvider";
import { Button, ButtonTheme, SizeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginActions } from "features/AuthByUsername";
import { selectLoginState } from "../../model/selectors/selectLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { username, password, error, isLoading, rememberMe } =
    useSelector(selectLoginState);
  const onChangeValueHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePasswordHandler = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch],
  );
  const onClickLoginForm = useCallback(async () => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={clsx(s.LoginForm, className)}>
      {error && <Text subtitle={error} theme={TextTheme.ERROR} />}
      {!error && <Text subtitle={"admin 123"} theme={TextTheme.PRIMARY} />}
      <div className={s.formGroup}>
        <label htmlFor="username">Username:</label>
        <Input
          value={username}
          placeholder={"введите username"}
          type="text"
          id={"username"}
          onChange={onChangeValueHandler}
        />
      </div>
      <div className={s.formGroup}>
        <label htmlFor="password">Password:</label>
        <Input
          value={password}
          placeholder={"введите пароль"}
          type="password"
          id={"password"}
          onChange={onChangePasswordHandler}
        />
      </div>
      <Button
        disabled={isLoading}
        size={SizeButton.S}
        variant={ButtonTheme.OUTLINE}
        onClick={onClickLoginForm}
      >
        Войти
      </Button>
    </div>
  );
});

export default LoginForm;
