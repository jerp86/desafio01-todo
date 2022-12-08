import { useState } from "react";
import { Header, ListTasks } from "./components";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <>
      <Header />

      <ListTasks tasks={tasks} />
    </>
  );
}

export default App;
