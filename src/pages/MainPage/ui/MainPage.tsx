import s from './MainPage.module.scss'
import clsx from 'clsx'
import { BugButton } from 'widgets/PageError'

interface Props {
  className?: string
}

const MainPage = ({ className }: Props) => {
  return (
    <div className={clsx(s.MainPage, className)}>
      MainPage
      <BugButton />
    </div>
  )
}

export default MainPage
