import { useState } from "react";
import { FilterValuesType } from "../App"

export type TaskType = {
  id: string,
  title: string,
  madeCountry?: string,
  isDone: boolean,

}

type PropsType = {
  title: string,
  tasks: Array<TaskType>,
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValuesType) => void,
  addTask: (title: string) => void;
}

export function TodoList(props: PropsType) {

  const [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={newTaskTitle}          //Надо сделать инпут по Enter
          onChange={(e) => {
            setNewTaskTitle(e.currentTarget.value)
          }}

        />
        <button onClick={() => {
          props.addTask(newTaskTitle);
          setNewTaskTitle('');
        }}>+</button>
      </div>

      <ul>
        {
          props.tasks.map(t => <li key={t.id}>
            <input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span><em> {t.madeCountry}</em>
            <button onClick={() => { props.removeTask(t.id) }}> x </button>
          </li>
          )
        }
      </ul>
      <div>
        <button onClick={() => { props.changeFilter("all") }}>Add</button>
        <button onClick={() => { props.changeFilter("active") }}>Active</button>
        <button onClick={() => { props.changeFilter("completed") }}>Completed</button>
      </div>
    </div>
  )
}