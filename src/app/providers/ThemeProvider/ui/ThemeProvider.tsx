import { ReactNode, useMemo, useState } from 'react'
import React from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext'

interface Props {
  children?: ReactNode
  initialTheme?: Theme
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider = ({ children, initialTheme }: Props) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultValue = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  )

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}{' '}
    </ThemeContext.Provider>
  )
}
