declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react'
  const content: FunctionComponent<SVGAttributes<SVGElement>>
  export default content
}
