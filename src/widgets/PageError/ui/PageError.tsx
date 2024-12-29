import s from './PageError.module.scss'
import clsx from 'clsx'

interface Props {
  className?: string
}

export const PageError = ({ className }: Props) => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={clsx(s.PageError, className)}>
      <p>Произошла непредвиденная ошибка</p>
      <button className={s.btn} onClick={reloadPage}>
        Обновить страницу
      </button>
    </div>
  )
}
