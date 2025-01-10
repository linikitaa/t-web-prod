import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";
export const LoginFormLazy = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) =>
      // @ts-ignore
      // для наглядности
      setTimeout(() => resolve(import("./LoginForm")), 1500),
    ),
);

// нормальный вариант ==============>
// export const AboutPageLazy = lazy(() => import('./AboutPage'));
