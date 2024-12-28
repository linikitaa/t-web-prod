import { Route, Routes } from 'react-router'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

interface Props {
  className?: string
}

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<Suspense fallback={'...loading'}>{element}</Suspense>}
        />
      ))}
    </Routes>
  )
}
