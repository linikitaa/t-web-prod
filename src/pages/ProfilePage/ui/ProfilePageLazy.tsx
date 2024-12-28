import { lazy } from 'react'
export const ProfilePageLazy = lazy(
  () =>
    new Promise((resolve) =>
      // @ts-ignore
      // для наглядности
      setTimeout(() => resolve(import('./ProfilePage')), 1500),
    ),
)

// нормальный вариант ==============>
// export const AboutPageLazy = lazy(() => import('./AboutPage'));
