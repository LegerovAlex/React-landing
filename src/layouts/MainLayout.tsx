import { Header } from "@/components/organisms/Header/Header";
import type { FC, PropsWithChildren } from "react";
import styles from "./MainLayout.module.scss";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
