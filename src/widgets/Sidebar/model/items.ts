import { FC, SVGAttributes } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainSvg from "shared/assets/icons/main.svg";
import AboutSvg from "shared/assets/icons/about.svg";
import ProfileSvg from "shared/assets/icons/profile.svg";
import ArticleSvg from "shared/assets/icons/article.svg";

export interface SidebarItemType {
  path: string;
  icon: FC<SVGAttributes<SVGElement>>;
  label: string;
}

export const SidebarItemList: SidebarItemType[] = [
  { path: RoutePath.main, icon: MainSvg, label: "Главная" },
  { path: RoutePath.about, icon: AboutSvg, label: "О нас" },
  { path: RoutePath.profile, icon: ProfileSvg, label: "Профиль" },
  { path: RoutePath.article, icon: ArticleSvg, label: "Статьи" },
];
