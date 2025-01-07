import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
  container?: HTMLElement
}

export const Portal = ({ children, container = document.body }: Props) => {
  return createPortal(children, container)
}
