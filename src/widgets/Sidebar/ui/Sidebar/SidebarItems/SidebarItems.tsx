import s from './SidebarItems.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainSvg from 'shared/assets/icons/main.svg'
import AboutSvg from 'shared/assets/icons/about.svg'
import ProfileSvg from 'shared/assets/icons/profile.svg'
import ArticleSvg from 'shared/assets/icons/article.svg'
interface Props {
  className?: string
  collapsed: boolean
}

const links = [
  { to: RoutePath.main, icon: MainSvg, label: 'Главная' },
  { to: RoutePath.about, icon: AboutSvg, label: 'О нас' },
  { to: RoutePath.profile, icon: ProfileSvg, label: 'Профиль' },
  { to: RoutePath.article, icon: ArticleSvg, label: 'Статьи' },
]

export const SidebarItems = ({ className, collapsed }: Props) => {
  return (
    <div
      className={clsx(s.SidebarItems, className, { [s.collapsed]: collapsed })}
    >
      {links.map((link, i) => (
        <Link
          key={i}
          to={link.to}
          className={clsx(s.link, { [s.collapsed]: collapsed })}
        >
          <link.icon
            className={clsx(s.pageIcon, { [s.collapsed]: collapsed })}
          />
          <span className={s.label}>{link.label}</span>
        </Link>
      ))}
    </div>
  )
}
