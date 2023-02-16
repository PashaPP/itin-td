import { useState } from 'react';
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
    { id: 1, title: "BMW", madeCountry: "Germany", isDone: true },
    { id: 2, title: "MB", madeCountry: "Germany", isDone: true },
    { id: 3, title: "Toyota", madeCountry: "Japan", isDone: false },
    { id: 4, title: "Audi", madeCountry: "Germany", isDone: true },
    { id: 5, title: "MMC", madeCountry: "Japan", isDone: false },
    { id: 6, title: "Tesla", madeCountry: "USA", isDone: false },
    { id: 7, title: "Peuget", madeCountry: "France", isDone: false },
    { id: 8, title: "Opel", madeCountry: "Germany", isDone: true },
  ]
  );

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks)
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
      />
    </div>
  );
}

