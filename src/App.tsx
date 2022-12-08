import { Header, ListTasks } from "./components";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  return (
    <>
      <Header />

      <ListTasks />
    </>
  );
}

export default App;
