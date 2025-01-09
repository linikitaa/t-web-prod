import s from './Navbar.module.scss'
import clsx from 'clsx'
import { Button, ButtonTheme, SizeButton } from 'shared/ui/Button/Button'
import { useState } from 'react'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { useSelector } from 'react-redux'
import { selectAuthData } from 'entities/User/model/selectors/selectAuthData/selectAuthData'
import { userActions } from 'entities/User'
import { useAppDispatch } from 'app/providers/StoreProvider'

interface Props {
  className?: string
}

export const Navbar = ({ className }: Props) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(selectAuthData)
  const dispatch = useAppDispatch()
  const onCloseModal = () => {
    setIsAuthModal(false)
  }
  const onShowModal = () => {
    setIsAuthModal(true)
  }
  const onLogoutUser = () => {
    dispatch(userActions.logOut())
  }
  console.log(authData)
  if (authData) {
    return (
      <div className={clsx(s.Navbar, className)}>
        <Button variant={ButtonTheme.INVERTED_OUTLINE} size={SizeButton.M} onClick={onLogoutUser}>
          LOG OUT
        </Button>
      </div>
    )
  }
  return (
    <div className={clsx(s.Navbar, className)}>
      <Button variant={ButtonTheme.INVERTED_OUTLINE} size={SizeButton.M} onClick={onShowModal}>
        LOG IN
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
