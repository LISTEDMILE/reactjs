import './Style.css'
import React, { useState } from "react";
import { useTodo } from "../context";
export default function TodoItems({todo}){
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [whattodoMsg, setWhattodoMsg] = useState(todo.whattodo)
    const {updatedTodo, deleteTodo, toggleComplete} = useTodo()
    

    const editTodo = () => {
        updatedTodo(todo.id, {...todo, todo:todoMsg, whattodo:whattodoMsg})
        setIsTodoEditable(false)

    }

    const toggleCompleted= () => {
        toggleComplete(todo.id)
    }
    return (
        <div id="ha">
        <div
        id="first"
            className={`${
                isTodoEditable ? "border border-red-500" : ""
            } `}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
            id="first1"
                type="text"
                className={`${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

<button
                className=" w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 mr-3"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center ${todo.completed ? "bg-[#e6e92b]" : "bg-white"} hover:bg-gray-100 shrink-0`
             } onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>

            </div>
            <textarea
                type="text"
                id="second"
                placeholder='Enter the description'
                className={`${
                    isTodoEditable ? "border-black/10 px-2 flex" : "hidden border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={whattodoMsg}
                onChange={(e) => setWhattodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
           
        </div>
    );

}