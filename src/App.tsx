import { useState } from "react";
import { Header, ListTasks } from "./components";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (title: string) => {
    const id = crypto.randomUUID();
    const newTask = { id, title, isCompleted: false };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <>
      <Header onAddTask={addTask} />

      <ListTasks tasks={tasks} />
    </>
  );
}

export default App;
