import { ITask } from "../App";
import styles from "./ListTasks.module.css";
import { Task } from "./Task";
import clipboard from "./../assets/clipboard.svg";

interface Props {
  tasks: ITask[];
  onCheck: (value: string) => void;
  onDelete: (value: string) => void;
}

export const ListTasks = ({ tasks, onCheck, onDelete }: Props) => {
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

      {tasks.length === 0 ? (
        <section className={styles.empty}>
          <img
            src={clipboard}
            alt="Icon representing the action of copying"
            loading="lazy"
          />

          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      ) : (
        <div className={styles.list}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onCheck={onCheck}
            />
          ))}
        </div>
      )}
    </section>
  );
};
