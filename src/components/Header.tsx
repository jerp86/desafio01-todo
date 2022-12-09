import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./Header.module.css";
import logo from "./../assets/todoLogo.svg";

interface Props {
  onAddTask: (value: string) => void;
}

export const Header = ({ onAddTask }: Props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (!title || title.length === 0) return;

    onAddTask(title);
    setTitle("");
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };

  return (
    <header className={styles.header}>
      <img src={logo} alt="ToDo logo" loading="lazy" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </header>
  );
};
