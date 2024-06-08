import React, { useState } from 'react'
import InputField from './components/InputField'
import './assets/css/output.css'
import NavBar from './components/NavBar'
import { Todo } from './model'
import TodoList from './components/TodoList'


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo)
  console.log(todos)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("");
    }
  };

  return (
    <main className="flex flex-col justify-start w-full h-full items-center mx-auto">
      <NavBar />
      <h1 className="text-4xl md:text-6xl my-6">Taskifi</h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />

    </main>
  )
}

export default App
