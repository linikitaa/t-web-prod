import s from './styles/app.module.scss'
import {Main} from "./Main";
import {About} from "./About";
import {Link, Route, Routes} from "react-router";

interface Props {
  className?: string
}


export const App = ({ className }: Props) => {
  return (
    <div className={s.app}>
        <Routes>
            <Route index element={<Main/>} />
            <Route path="about" element={<About />} />
        </Routes>

        <Link to="/">main </Link>
        <Link to="about">about</Link>
    </div>
  )
}
