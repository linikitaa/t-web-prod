import s from './LoginModal.module.scss'
import clsx from 'clsx'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

interface Props {
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export const LoginModal = ({ className, isOpen, onClose }: Props) => {
  return (
    <Modal
      className={clsx(s.LoginModal, className)}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  )
}
