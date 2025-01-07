import s from './Navbar.module.scss'
import clsx from 'clsx'
import { Button, ButtonTheme, SizeButton } from 'shared/ui/Button/Button'
import { useState } from 'react'
import { LoginModal } from 'features/ui/LoginModal/LoginModal'

interface Props {
  className?: string
}

export const Navbar = ({ className }: Props) => {
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = () => {
    setIsAuthModal(false)
  }
  const onShowModal = () => {
    setIsAuthModal(true)
  }

  return (
    <div className={clsx(s.Navbar, className)}>
      <Button
        variant={ButtonTheme.INVERTED_OUTLINE}
        size={SizeButton.M}
        onClick={onShowModal}
      >
        LOG IN
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
