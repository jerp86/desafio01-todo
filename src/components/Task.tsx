import { Trash, TrashSimple } from "phosphor-react";
import { ITask } from "../App";
import styles from "./Task.module.css";

interface Props {
  task: ITask;
  onDelete: (value: string) => void;
}

export const Task = ({ task, onDelete }: Props) => {
  const handleDelete = (id: string) => onDelete(id);

  return (
    <div className={styles.task}>
      <button className={styles.check}>
        <div></div>
      </button>

      <p>{task.title}</p>

      <button className={styles.delete} onClick={() => handleDelete(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
};
