import s from "./SidebarItems.module.scss";
import clsx from "clsx";
import { Link } from "react-router";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import { memo } from "react";
interface Props {
  className?: string;
  SidebarItemList: SidebarItemType[];
  collapsed: boolean;
}

export const SidebarItems = memo(
  ({ className, collapsed, SidebarItemList }: Props) => {
    return (
      <div
        className={clsx(s.SidebarItems, className, {
          [s.collapsed]: collapsed,
        })}
      >
        {SidebarItemList.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={clsx(s.link, { [s.collapsed]: collapsed })}
          >
            <link.icon
              className={clsx(s.pageIcon, { [s.collapsed]: collapsed })}
            />
            <span className={s.label}>{link.label}</span>
          </Link>
        ))}
      </div>
    );
  },
);
