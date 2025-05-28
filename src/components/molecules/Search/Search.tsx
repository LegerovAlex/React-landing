import type { FC } from "react";
import type { SearchProps } from "./Search.model";
import { SearchIcon } from "@/static";
import styles from "./Search.module.scss";

export const Search: FC<SearchProps> = ({ placeholder, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        {...props}
      />
      <span className={styles.icon}>
        <SearchIcon />
      </span>
    </div>
  );
};
