import { Outlet } from "react-router";
import styles from "./styles.module.css";

interface IMainLayoutProps {
  sidebar: React.ReactNode;
}

const MainLayout = ({ sidebar }: IMainLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
