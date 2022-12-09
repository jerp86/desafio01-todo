import { useCallback, useEffect, useState } from "react";
import { Header, ListTasks } from "./components";

const LOCAL_STORAGE_KEY = "todo:tasksSaved";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const setTasksAndSave = (newTasks: ITask[]) => {
    console.log("setTasksAndSave", newTasks);

    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const addTask = useCallback(
    (title: string) => {
      const id = crypto.randomUUID();
      const newTasks: ITask[] = [...tasks, { id, title, isCompleted: false }];
      console.log("addTask", title, newTasks);
      setTasksAndSave(newTasks);
    },
    [tasks]
  );

  const deleteTaskById = useCallback(
    (taskId: string) => {
      const newTasks = tasks.filter(({ id }) => id !== taskId);
      setTasksAndSave(newTasks);
    },
    [tasks]
  );

  const checkById = useCallback(
    (taskId: string) => {
      const newTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      );
      setTasksAndSave(newTasks);
    },
    [tasks]
  );

  useEffect(() => {
    const tasksSaved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (tasksSaved) {
      setTasks(JSON.parse(tasksSaved));
    }
  }, []);

  return (
    <>
      <Header onAddTask={addTask} />

      <ListTasks tasks={tasks} onDelete={deleteTaskById} onCheck={checkById} />
    </>
  );
}

export default App;
