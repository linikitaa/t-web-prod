import "./Loader.scss";
import clsx from "clsx";
import React from "react";
interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={clsx("lds-ellipsis", className)}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
