import { lazy } from 'react'
export const MainPageLazy = lazy(
  () =>
    new Promise((resolve) =>
      // @ts-ignore
      // для наглядности
      setTimeout(() => resolve(import('./MainPage')), 1500),
    ),
)

// нормальный вариант ==============>
// export const MainPageLazy = lazy(() => import('./MainPage'));
