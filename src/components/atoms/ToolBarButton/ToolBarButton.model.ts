import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ToolBarButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
}
