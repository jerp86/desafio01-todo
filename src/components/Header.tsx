import styles from "./Header.module.css";
import logo from "./../assets/todoLogo.svg";

export const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="ToDo logo" loading="lazy" />
  </header>
);
