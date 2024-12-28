import { Link, Route, Routes } from 'react-router'
import { AboutPageLazy } from '../pages/AboutPage/AboutPageLazy'
import { MainPageLazy } from '../pages/MainPage/MainPageLazy'
import { Suspense } from 'react'
import './styles/index.scss'
import clsx from 'clsx'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { Button, ButtonTheme, SizeButton } from '../shared/ui/Button/Button'
import { Navbar } from '../widgets/Navbar'

interface Props {
  className?: string
}

export const App = ({ className }: Props) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={clsx('app', theme)}>
      <Navbar />
      <Suspense fallback={'...loading'}>
        <Routes>
          <Route index element={<MainPageLazy />} />
          <Route path="about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
      <Button
        size={SizeButton.M}
        variant={ButtonTheme.OUTLINE}
        onClick={toggleTheme}
      >
        onToggle
      </Button>
    </div>
  )
}
