import s from './Navbar.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router'
import {
  Button,
  ButtonTheme,
  SizeButton,
} from '../../../shared/ui/Button/Button'

interface Props {
  className?: string
}

export const Navbar = ({ className }: Props) => {
  return (
    <div className={clsx(s.Navbar, className)}>
      <div className={s.links}>
        <Link to="/">main </Link>
        <Link to="about">about</Link>
        <Button
          variant={ButtonTheme.INVERTED_OUTLINE}
          size={SizeButton.M}
          onClick={() => {}}
        >
          LOG OUT
        </Button>
      </div>
    </div>
  )
}
