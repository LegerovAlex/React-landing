import type { ButtonProps } from "./ActionButton.model";
import styles from "./Button.module.scss";

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button}  ${className} `} {...props}>
      {children}
    </button>
  );
};
