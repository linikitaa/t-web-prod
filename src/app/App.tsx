import './styles/index.scss'
import clsx from 'clsx'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar'

interface Props {
  className?: string
}

export const App = ({ className }: Props) => {
  const { theme } = useTheme()

  return (
    <div className={clsx('app', theme)}>
      <Navbar />
      <AppRouter />

      <Sidebar />
    </div>
  )
}
