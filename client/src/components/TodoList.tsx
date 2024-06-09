import React from 'react'
import { Todo } from '../model'
import Task from './Task';



interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}



const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos mt-6 flex flex-col gap-4 flex-wrap">
            {todos.map(todo => (
                <Task todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    )
}

export default TodoList