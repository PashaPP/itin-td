import { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { TaskType, TodoList } from './components/Todolist';


export type FilterValuesType = "all" | "completed" | "active";

export function App() {

  // let tasks1: Array<TaskType> = [
  //   { id: 1, title: "CSS", isDone: true },
  //   { id: 2, title: "JS", isDone: true },
  //   { id: 3, title: "React", isDone: false },
  //   { id: 4, title: "Redux", isDone: false, }
  // ]
  // let tasks2: Array<TaskType> = [
  //   { id: 1, title: "Lost", isDone: true },
  //   { id: 2, title: "Home", isDone: false },
  // ]
  // let tasks3: Array<TaskType> = [
  //   { id: 1, title: "Tennis", isDone: false },
  //   { id: 2, title: "CF", isDone: true },
  //   { id: 3, title: "Hockey", isDone: true },
  // ]

  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: "BMW", madeCountry: "Germany", isDone: true },
    { id: v1(), title: "MB", madeCountry: "Germany", isDone: true },
    { id: v1(), title: "Toyota", madeCountry: "Japan", isDone: false },
    { id: v1(), title: "Audi", madeCountry: "Germany", isDone: true },
    { id: v1(), title: "MMC", madeCountry: "Japan", isDone: false },
    { id: v1(), title: "Tesla", madeCountry: "USA", isDone: false },
    { id: v1(), title: "Peuget", madeCountry: "France", isDone: false },
    { id: v1(), title: "Opel", madeCountry: "Germany", isDone: true },
  ]
  );

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: string) {
    let filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks)
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false }
    let newTasks = [newTask, ...tasks]
    setTasks(newTasks)
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value)
  }

  let tasksForTodolist = tasks;

  if (filter === "completed") {
    tasksForTodolist = tasks.filter(t => t.isDone === true)
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter(t => t.isDone === false)
  }

  return (
    <div className="App">
      {/* <TodoList title="What to learn" tasks={tasks1} />
      <TodoList title="Movies" tasks={tasks2} />
      <TodoList title="Sport" tasks={tasks3} /> */}
      <TodoList
        title="My car"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
      />
    </div>
  );
}

