import s from './SidebarItems.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainSvg from 'shared/assets/icons/main.svg'
import AboutSvg from 'shared/assets/icons/about.svg'
interface Props {
  className?: string
}

const links = [
  { to: RoutePath.main, icon: MainSvg, label: 'Главная' },
  { to: RoutePath.about, icon: AboutSvg, label: 'О нас' },
  { to: RoutePath.profile, icon: AboutSvg, label: 'Профиль' },
  { to: RoutePath.article, icon: AboutSvg, label: 'Статьи' },
]

export const SidebarItems = ({ className }: Props) => {
  return (
    <div className={clsx(s.SidebarItems, className)}>
      {links.map((link, i) => (
        <Link key={i} to={link.to} className={s.link}>
          <link.icon className={s.pageIcon} />
          {link.label}
        </Link>
      ))}
    </div>
  )
}
