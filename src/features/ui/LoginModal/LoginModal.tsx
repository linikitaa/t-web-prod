import s from './LoginModal.module.scss'
import clsx from 'clsx'
import { Modal } from 'shared/ui/Modal/Modal'

interface Props {
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export const LoginModal = ({ className, isOpen, onClose }: Props) => {
  return (
    <div className={clsx(s.LoginModal, className)}>
      <Modal isOpen={isOpen} onClose={onClose}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
        temporibus.
      </Modal>
    </div>
  )
}
