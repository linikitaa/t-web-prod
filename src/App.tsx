import s from './styles/app.module.scss'
import {Link, Route, Routes} from "react-router";
import {AboutPageLazy} from "./pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "./pages/MainPage/MainPageLazy";
import {Suspense} from "react";

interface Props {
  className?: string
}


export const App = ({ className }: Props) => {
  return (
    <div className={s.app}>
        <Suspense fallback={'...loading'}>
            <Routes>
                <Route index element={<MainPageLazy/>} />
                <Route path="about" element={<AboutPageLazy />} />
            </Routes>
        </Suspense>

        <Link to="/">main </Link>
        <Link to="about">about</Link>
    </div>
  )
}
