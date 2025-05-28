import type { FC } from "react";
import type { ActionButtonProps } from "./ActionButton.model";
import styles from "./ActionButton.module.scss";

export const ActionButton: FC<ActionButtonProps> = ({
  notificationCount,
  onClick,
  children,
  ...props
}) => {
  return (
    <button onClick={onClick} className={styles.button} {...props}>
      {children}
      {notificationCount && (
        <span className={styles.badge}>{notificationCount}</span>
      )}
    </button>
  );
};
