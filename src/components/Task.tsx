import { Trash, TrashSimple } from "phosphor-react";
import styles from "./Task.module.css";

export const Task = () => (
  <div className={styles.task}>
    <button className={styles.check}>
      <div></div>
    </button>

    <p>
      Integer urna interdum massa libero auctor neque turpis turpis semper. Duis
      vel sed fames integer.
    </p>

    <button className={styles.delete}>
      <Trash size={24} />
    </button>
  </div>
);
