import type { FC } from "react";
import type { ToggleProps } from "./Toggle.model";
import styles from "./Toggle.module.scss";

export const Toggle: FC<ToggleProps> = ({ checked, onChange, label }) => {
  return (
    <label className={styles.toggle}>
      {label && <span className={styles.label}>{label}</span>}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.slider} />
    </label>
  );
};
