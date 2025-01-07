import React from 'react'
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider'
import 'app/styles/index.scss'
export const ThemeDecorator = (theme: string) => (Story: any) => {
  return (
    <ThemeProvider>
      <div className={`theme-${theme}`}>{Story()}</div>
    </ThemeProvider>
  )
}
