import {createContext,useContext} from "react"

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            whattodo:"todoo",
            completed:false,
        }
    ],
    addTodo:(todo,whattodo) => {},
    updatedTodo:(id,todo,whattodo) => {},
    deleteTodo: (id) =>{},
    toggleComplete: (id) => {}
    
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

