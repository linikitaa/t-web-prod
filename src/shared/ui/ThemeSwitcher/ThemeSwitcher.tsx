import s from "./ThemeSwitcher.module.scss";
import clsx from "clsx";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import ThemeIcon from "../../assets/icons/theme.svg";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { memo } from "react";

interface Props {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={clsx(s.ThemeSwitcher, className)}
      variant={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      <ThemeIcon fill={theme === Theme.LIGHT ? "#74A2B2" : "#5ED3F3"} />
    </Button>
  );
});
