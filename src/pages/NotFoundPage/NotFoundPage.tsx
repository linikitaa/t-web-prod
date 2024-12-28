import s from './NotFoundPage.module.scss'
import clsx from 'clsx'

interface Props {
  className?: string
}

export const NotFoundPage = ({ className }: Props) => {
  return <div className={clsx(s.NotFoundPage, className)}>Page Not Found</div>
}
