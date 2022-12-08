import { PlusCircle } from "phosphor-react";

import styles from "./Header.module.css";
import logo from "./../assets/todoLogo.svg";

export const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="ToDo logo" loading="lazy" />

    <form className={styles.newTaskForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  </header>
);
