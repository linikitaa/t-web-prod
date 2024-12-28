import s from './Sidebar.module.scss'
import clsx from 'clsx'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { Link } from 'react-router'
import { SidebarItems } from 'widgets/Sidebar/ui/Sidebar/SidebarItems/SidebarItems'

interface Props {
  className?: string
}

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={clsx(s.Sidebar, className)}>
      <SidebarItems className={s.links} />
      <ThemeSwitcher className={s.iconTheme} />
    </div>
  )
}
