import s from './ArticlePage.module.scss'
import clsx from 'clsx'

interface Props {
  className?: string
}

const ArticlePage = ({ className }: Props) => {
  return <div className={clsx(s.ArticlePage, className)}>Article</div>
}

export default ArticlePage
