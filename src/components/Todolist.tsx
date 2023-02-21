import { ChangeEvent, useState } from "react";
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
  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value)
  }
  const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle('');
  }
  const onAllClickHandler = () => { props.changeFilter("all") }
  const onActiveClickHandler = () => { props.changeFilter("active") }
  const onCompletedClickHandler = () => { props.changeFilter("completed") }


  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={newTaskTitle}          //Надо сделать input по Enter
          onChange={onNewTitleChangeHandler}
        />
        <button onClick={addTask}>+</button>
      </div>

      <ul>
        {
          props.tasks.map(t => {
            const onRemoveHandler = () => { props.removeTask(t.id) }
            return <li key={t.id}>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span><em> {t.madeCountry}</em>
              <button onClick={onRemoveHandler}> x </button>
            </li>
          })
        }
      </ul>
      <div>
        <button onClick={onAllClickHandler}>Add</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>
    </div>
  )
}