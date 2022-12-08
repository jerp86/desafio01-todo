import styles from "./ListTasks.module.css";
import { Task } from "./Task";

export const ListTasks = () => (
  <section className={styles.tasks}>
    <header className={styles.header}>
      <div>
        <p>Tarefas criadas</p>
        <span>0</span>
      </div>

      <div>
        <p className={styles.textPurple}>Concluídas</p>
        <span>0</span>
      </div>
    </header>

    <div className={styles.list}>
      <Task />
      <Task />
    </div>
  </section>
);
