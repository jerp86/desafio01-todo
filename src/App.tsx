import { useCallback, useState } from "react";
import { Header, ListTasks } from "./components";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = useCallback((title: string) => {
    const id = crypto.randomUUID();
    const newTask = { id, title, isCompleted: false };
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const deleteTaskById = useCallback(
    (taskId: string) => {
      const newTasks = tasks.filter(({ id }) => id !== taskId);
      setTasks(newTasks);
    },
    [tasks]
  );

  return (
    <>
      <Header onAddTask={addTask} />

      <ListTasks tasks={tasks} onDelete={deleteTaskById} />
    </>
  );
}

export default App;
