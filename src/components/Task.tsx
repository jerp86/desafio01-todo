import { CheckCircle, Trash } from "phosphor-react";

import { ITask } from "../App";
import styles from "./Task.module.css";

interface Props {
  task: ITask;
  onCheck: (value: string) => void;
  onDelete: (value: string) => void;
}

export const Task = ({ task, onCheck, onDelete }: Props) => {
  const handleDelete = () => onDelete(task.id);

  const handleCheck = () => onCheck(task.id);

  return (
    <div className={styles.task}>
      <button className={styles.check} onClick={handleCheck}>
        {task.isCompleted ? (
          <CheckCircle size={24} color="#5e60ce" weight="fill" />
        ) : (
          <div></div>
        )}
      </button>

      <p className={task.isCompleted ? styles.completed : ""}>{task.title}</p>

      <button className={styles.delete} onClick={handleDelete}>
        <Trash size={24} />
      </button>
    </div>
  );
};
