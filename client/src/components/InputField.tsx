import React, { useRef } from 'react'


interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

// Have to remember when giving access to a parent component you have to pass its properties and in typescript these properties have to have their types defined. When it comes to setting the type for a react useState function there is a specific type listed in the Props interface.
const InputField = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <form onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
        }}>
            <div className="flex flex-row justify-center items-center gap-2 w-screen lg:w-[900px] relative">
                <div className="flex flex-row items-center justify-between w-full relative mx-4 md:mx-10">
                    <input
                        ref={inputRef}
                        type="text"
                        onChange={
                            (e) => setTodo(e.target.value)
                        }
                        placeholder="Enter a task here"
                        className="input input_focus w-full text-base-content rounded-3xl relative" />
                    <button type="submit" className="absolute h-10 !min-h-8 w-10 right-1  btn bg-neutral rounded-full text-base-100 border-0 !shadow-2xl">Go</button>
                </div>
            </div>
        </form>
    )
}

export default InputField