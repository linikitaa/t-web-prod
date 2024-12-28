import s from './Button.module.scss'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  className?: string
  onClick: () => void
  children: ReactNode
  disabled?: boolean
  variant?: ButtonTheme
  size?: SizeButton
}

export enum ButtonTheme {
  PRIMARY = 'primary',
  INVERTED_PRIMARY = 'invertedPrimary',
  OUTLINE = 'outline',
  INVERTED_OUTLINE = 'invertedOutline',
  DISABLED = 'disabled',
  CLEAR = 'clear',
}

export enum SizeButton {
  S = 'small',
  M = 'medium',
  L = 'large',
}
export const Button = ({
  className,
  variant,
  size,
  disabled,
  onClick,
  children,
}: Props) => {
  const onClickHandler = () => {
    onClick()
  }

  return (
    <div
      onClick={onClickHandler}
      className={clsx(
        s.Button,
        className,
        variant && s[variant],
        size && s[size],
        disabled && s.disabled,
      )}
    >
      {children}
    </div>
  )
}
