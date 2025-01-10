import s from "./LoginModal.module.scss";
import clsx from "clsx";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";
import { Suspense } from "react";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export const LoginModal = ({ className, isOpen, onClose }: Props) => {
  return (
    <Modal
      className={clsx(s.LoginModal, className)}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={".....loading"}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
