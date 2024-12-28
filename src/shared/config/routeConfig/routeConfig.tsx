import { RouteProps } from 'react-router'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlePage } from 'pages/ArticlePage'
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLE = 'article',
  ERROR = 'error',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: 'about',
  [AppRoutes.PROFILE]: 'profile',
  [AppRoutes.ARTICLE]: 'article',
  [AppRoutes.ERROR]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.ARTICLE]: {
    path: RoutePath.article,
    element: <ArticlePage />,
  },
  [AppRoutes.ERROR]: {
    path: RoutePath.error,
    element: <NotFoundPage />,
  },
}
