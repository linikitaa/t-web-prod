import React, { memo } from "react";
import s from "./Sidebar.module.scss";
import clsx from "clsx";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { SidebarItems } from "widgets/Sidebar/ui/SidebarItems/SidebarItems";
import avatar from "shared/assets/ava.jpg";
import { useState } from "react";
import ArrowSvg from "shared/assets/icons/arrow.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { SidebarItemList } from "widgets/Sidebar/model/items";

interface Props {
  className?: string;
}

export const Sidebar = memo(({ className }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid={"sidebar"}
      className={clsx(s.Sidebar, className, { [s.collapsed]: collapsed })}
    >
      <Button
        data-testid="sidebar-toggle"
        className={clsx(s.collapsedBtn, { [s.collapsed]: collapsed })}
        variant={ButtonTheme.CLEAR}
        onClick={onCollapsed}
      >
        {collapsed ? ">" : "<"}
        {/*<ArrowSvg />*/}
      </Button>
      <img
        src={avatar || ""}
        alt="ava"
        className={clsx(s.avatar, { [s.collapsed]: collapsed })}
      />
      <SidebarItems
        SidebarItemList={SidebarItemList}
        className={s.links}
        collapsed={collapsed}
      />
      <ThemeSwitcher
        className={clsx(s.iconTheme, { [s.collapsed]: collapsed })}
      />
    </div>
  );
});
