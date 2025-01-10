declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.jpeg";
declare module "*.jpg";
declare module "*.png";
declare module "*.svg" {
  import { FunctionComponent, SVGAttributes } from "react";
  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}
