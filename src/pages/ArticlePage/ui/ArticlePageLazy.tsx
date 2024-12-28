import { lazy } from 'react'
export const ArticlePageLazy = lazy(
  () =>
    new Promise((resolve) =>
      // @ts-ignore
      // для наглядности
      setTimeout(() => resolve(import('./ArticlePage')), 1500),
    ),
)

// нормальный вариант ==============>
// export const AboutPageLazy = lazy(() => import('./AboutPage'));
