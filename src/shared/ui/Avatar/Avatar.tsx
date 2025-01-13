import s from "./Avatar.module.scss";
import clsx from "clsx";
import { CSSProperties, useMemo } from "react";
import React from "react";

interface Props {
  className?: string;
  size?: number;
  src?: string;
  alt?: string;
}

export const Avatar = ({ className, src, alt, size }: Props) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);

  return (
    <img
      style={styles}
      src={src}
      alt={alt}
      className={clsx(s.Avatar, className)}
    />
  );
};
