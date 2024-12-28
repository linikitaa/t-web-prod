import { lazy } from 'react'
export const AboutPageLazy = lazy(
  () =>
    new Promise((resolve) =>
      // @ts-ignore
      // для наглядности
      setTimeout(() => resolve(import('./AboutPage')), 1500),
    ),
)

// нормальный вариант ==============>
// export const AboutPageLazy = lazy(() => import('./AboutPage'));
