import type { FC } from "react";
import styles from "./ActionButtonsList.module.scss";
import { actionButtonsData } from "./ActionButtons.data";
import { ActionButton } from "../../atoms/ActionButton/ActionButton";

export const ActionButtonList: FC = () => {
  return (
    <div className={styles.wrapper}>
      {actionButtonsData.map(({ icon, notificationCount, id }) => (
        <ActionButton key={id} notificationCount={notificationCount}>
          {icon}
        </ActionButton>
      ))}
    </div>
  );
};
