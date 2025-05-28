import type { FC } from "react";
import type { ToolBarButtonProps } from "./ToolBarButton.model";
import styles from "./ToolBarButton.module.scss";

export const ToolBarButton: FC<ToolBarButtonProps> = ({
  children,
  label,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={` ${className ? styles[className] : styles.button}`}
    >
      {children}
      <span className={styles.label}>{label}</span>
    </button>
  );
};
