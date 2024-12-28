import s from './Sidebar.module.scss'
import clsx from 'clsx'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { SidebarItems } from 'widgets/Sidebar/ui/Sidebar/SidebarItems/SidebarItems'
import avatar from 'shared/assets/ava.jpg'
import { useState } from 'react'
import ArrowSvg from 'shared/assets/icons/arrow.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface Props {
  className?: string
}

export const Sidebar = ({ className }: Props) => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={clsx(s.Sidebar, className, { [s.collapsed]: collapsed })}>
      <Button
        className={clsx(s.collapsedBtn, { [s.collapsed]: collapsed })}
        variant={ButtonTheme.CLEAR}
        onClick={onCollapsed}
      >
        <ArrowSvg />
      </Button>
      <img
        src={avatar}
        alt="ava"
        className={clsx(s.avatar, { [s.collapsed]: collapsed })}
      />
      <SidebarItems className={s.links} collapsed={collapsed} />
      <ThemeSwitcher
        className={clsx(s.iconTheme, { [s.collapsed]: collapsed })}
      />
    </div>
  )
}
