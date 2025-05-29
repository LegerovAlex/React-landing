import type { FC } from "react";
import styles from "./ActionButtonsList.module.scss";
import { actionButtonsConfig } from "./ActionButtons.config";
import { ActionButton } from "../../atoms/ActionButton/ActionButton";

export const ActionButtonList: FC = () => {
  return (
    <div className={styles.wrapper}>
      {actionButtonsConfig.map(({ icon, notificationCount, id }) => (
        <ActionButton key={id} notificationCount={notificationCount}>
          {icon}
        </ActionButton>
      ))}
    </div>
  );
};
