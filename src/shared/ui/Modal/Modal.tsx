import s from "./Modal.module.scss";
import clsx from "clsx";
import React from "react";
import {
  ReactNode,
  MouseEvent,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { Portal } from "shared/ui/Portal/Portal";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
}
const ANIMATION_DELAY = 300;
export const Modal = ({ className, onClose, children, isOpen }: Props) => {
  const [isClosing, setIsClosing] = useState(false);
  const { theme } = useTheme();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div
        className={clsx(
          s.Modal,
          className,
          isOpen && s.isOpened,
          isClosing && s.isClosing,
          theme,
        )}
      >
        <div className={clsx(s.overlay)} onClick={closeModal}>
          <div className={s.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
