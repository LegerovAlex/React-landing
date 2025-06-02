import type { ImgHTMLAttributes } from "react";

export interface ProfileProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  size: ProfileSize;
}

export enum ProfileSize {
  Big = "big",
  Small = "small",
  Medium = "medium",
}
