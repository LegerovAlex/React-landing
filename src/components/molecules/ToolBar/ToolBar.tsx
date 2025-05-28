import type { FC } from "react";
import { toolBarButtons } from "./ToolBar.config";
import { ToolBarButton } from "@/components/atoms/ToolBarButton/ToolBarButton";
import styles from "./ToolBar.module.scss";

export const ToolBar: FC = () => {
  return (
    <div className={styles.toolBar}>
      {toolBarButtons.map(({ icon, label, className }) => (
        <ToolBarButton key={label} label={label} className={className}>
          {icon}
        </ToolBarButton>
      ))}
    </div>
  );
};
