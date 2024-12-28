import s from './MainPage.module.scss'
import clsx from 'clsx'

interface Props {
  className?: string
}

const MainPage = ({ className }: Props) => {
  return <div className={clsx(s.MainPage, className)}>MainPage</div>
}

export default MainPage
