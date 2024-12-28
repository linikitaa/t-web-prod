import s from './Sidebar.module.scss'
import clsx from 'clsx'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { SidebarItems } from 'widgets/Sidebar/ui/Sidebar/SidebarItems/SidebarItems'
import avatar from 'shared/assets/ava.jpg'

interface Props {
  className?: string
}

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={clsx(s.Sidebar, className)}>
      <img src={avatar} alt="ava" className={s.avatar} />
      <SidebarItems className={s.links} />
      <ThemeSwitcher className={s.iconTheme} />
    </div>
  )
}
