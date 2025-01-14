import s from "./Text.module.scss";
import clsx from "clsx";
import React, { memo, ReactNode } from "react";
export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

interface Props {
  className?: string;
  title?: string;
  subtitle?: string | ReactNode;
  theme?: TextTheme;
}

export const Text = memo(
  ({ className, title, subtitle, theme = TextTheme.PRIMARY }: Props) => {
    return (
      <div className={clsx(s.Text, s[theme], className)}>
        {title && <p className={s.title}>{title}</p>}
        {subtitle && <p className={s.subtitle}>{subtitle}</p>}
      </div>
    );
  },
);
