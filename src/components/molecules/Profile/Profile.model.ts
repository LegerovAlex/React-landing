import type { ImgHTMLAttributes } from "react";

export interface ProfileProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  size: "big" | "small";
}
