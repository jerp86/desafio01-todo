import { ITask } from "../App";
import styles from "./ListTasks.module.css";
import { Task } from "./Task";

interface Props {
  tasks: ITask[];
  onDelete: (value: string) => void;
}

export const ListTasks = ({ tasks, onDelete }: Props) => {
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter(({ isCompleted }) => isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{`${completedTasks} de ${taskQuantity}`}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
};
