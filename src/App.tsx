import './App.css';
import { TaskType, TodoList } from './components/Todolist';

export function App() {

  let tasks1: Array<TaskType> = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false }
  ]

  let tasks2: Array<TaskType> = [
    { id: 1, title: "Lost", isDone: true },
    { id: 2, title: "Home", isDone: false },
    { id: 3, title: "XXX", isDone: true }
  ]
  let tasks3: Array<TaskType> = [
    { id: 1, title: "Tennis", isDone: false },
    { id: 2, title: "CF", isDone: true },
    { id: 3, title: "Hockey", isDone: false }
  ]



  return (
    <div className="App">
      <TodoList title="What to learn" tasks={tasks1} />
      <TodoList title="Movies" tasks={tasks2} />
      <TodoList title="Sport" tasks={tasks3} />
    </div>
  );
}

