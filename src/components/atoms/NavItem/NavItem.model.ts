import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface NavItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
}
