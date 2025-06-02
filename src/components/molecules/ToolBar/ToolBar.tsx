import type { FC } from "react";
import { toolBarButtonsData } from "./ToolBar.data";
import { ToolBarButton } from "@/components/atoms/ToolBarButton/ToolBarButton";
import styles from "./ToolBar.module.scss";

export const ToolBar: FC = () => {
  return (
    <div className={styles.toolBar}>
      {toolBarButtonsData.map(({ icon, label, className }) => (
        <ToolBarButton key={label} label={label} className={className}>
          {icon}
        </ToolBarButton>
      ))}
    </div>
  );
};
