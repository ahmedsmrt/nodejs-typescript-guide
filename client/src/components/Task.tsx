import React, { useEffect, useRef, useState } from 'react'
import { Todo } from "../model"
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { todo } from 'node:test';


type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const Task = ({ todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);

    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleCompletedTask = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDeletedTask = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        );

        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])


    return (
        <form onSubmit={(e) => handleEdit(e, todo.id)} className='w-[90%] md:w-[570px] rounded-md min-h-12 mx-auto flex justify-between items-center border-0 bg-sky-300 px-4   '>
            {
                edit ? (
                    <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='input input_focus text-base-content rounded-3xl h-8' />
                ) : todo.isDone ? (
                    <s className=" w-full h-8 max-w-md text-neutral flex items-center" >{todo.todo}</s>
                ) : (
                    <span className=" w-full h-8 max-w-md text-neutral flex items-center" >{todo.todo}</span>
                )
            }
            <div className='flex gap-x-4'>
                <span className="hover:scale-125 cursor-pointer" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
                    <TbEdit />
                </span>
                <span className="hover:scale-125 cursor-pointer" onClick={() => handleDeletedTask(todo.id)}>
                    <MdDelete />
                </span>
                <span className="hover:scale-125 cursor-pointer" onClick={() => handleCompletedTask(todo.id)}>
                    <IoMdCheckboxOutline />
                </span>
            </div>
        </form>
    )
}

export default Task