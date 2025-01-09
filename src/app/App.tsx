import './styles/index.scss'
import clsx from 'clsx'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { useEffect } from 'react'
import { userActions } from 'entities/User'

interface Props {
  className?: string
}

export const App = ({ className }: Props) => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={clsx('app', theme)}>
      <Navbar />
      <div className={'content-page'}>
        <Sidebar />
        <div className={'page-wrapper'}>
          <AppRouter />
        </div>
      </div>
    </div>
  )
}
