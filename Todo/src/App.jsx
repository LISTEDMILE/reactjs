import { useEffect, useState } from 'react'
import './App.css'
import img1 from './img.png'
import  {TodoProvider} from './context'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'
function App() {


  //  pehle context bnake provider as TodoProvider export kiya from TodoContext.js .
  //  fir jo functions TodoContext.js me the wo sab define kiye.
  //  now in TodoForm.jsx hmne useTodo function se ((bilkul same name se (addTodo )))     function import kiya simply by 
  //  const{addTodo} = useTodo()  //   fir hmne ik html form create kiya same file me for input or onSubmit me kuch conditions and statements jiske sath hmne addTodo() call kiya isme App.jsx me already hmne define kiya h ki id kaise leni h to iske arguments me id lene ki jarurat nhi h
  //  todo jo context wala h uske liye yha const todo pass karna hoga but agar dono same ho to todo:todo likhne ke bjae direct todo se chal jaega ...

  //  in TodoItems.jsx every function ko define kiya.
  //  aur jaise editTodo me like h parameter me jo objec diya h usme ...todo,todo:todoMsg  ka matlab h todo me to todoMsg aa jaega but aur sara pehle jaisa hi rhega.....

  // input dale aur usse kya ho ye bhi btaya

  //  app.jsx me sare functions define kiye

  //  const todos = JSON.parse(localStorage.getItem("todos"))   ----->  used to get data from local storage in which JSON.parse is used to get data and convert in .json format
  //  "todos" is name for the localStorage
  //    localStorage.setItem("todos", JSON.stringify(todos))    ----->  used to set data to the local storage "todos" is the name and JSON.stringify is used to change data to string format.
  //  remember in local storage we can only store string value......


  const [todos, setTodos] = useState([])
  const addTodo =(todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo},...prev])
  }

  const updatedTodo =(id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo =(id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
    const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo))
  }


  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  return (
    <TodoProvider value={{todos, addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <header>
        <div id="img2">
        <img src={img1}/></div>
        <h1 className='text-4xl text-white py-1 px-32 bg-gray-800 rounded-lg'>TODOS</h1>
        <div className='flex gap-7 '>
          <a class="a" href="#">Home</a>
          <a class="a" href="#">About Us</a>
          <a class="a" href="#">Contact Us</a>
        </div>
      </header>
     <div id="div1">
                <div id="div2">
                    <h1 className="text-2xl font-bold text-center text-white mb-8 mt-8">Manage your Tasks</h1>
                    <div id="div3">
                        <TodoForm/>
                    </div>
                    <div id="elements">
                       {todos.map((todo) => (
                        <div  key = {todo.id}>
                          <TodoItems todo={todo} />
                        </div>
                       ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
