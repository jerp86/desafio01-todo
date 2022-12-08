import { Trash, TrashSimple } from "phosphor-react";
import { ITask } from "../App";
import styles from "./Task.module.css";

interface Props {
  task: ITask;
}

export const Task = ({ task }: Props) => (
  <div className={styles.task}>
    <button className={styles.check}>
      <div></div>
    </button>

    <p>{task.title}</p>

    <button className={styles.delete}>
      <Trash size={24} />
    </button>
  </div>
);
