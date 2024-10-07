
import { createRoot } from 'react-dom/client'
import App from './Layout.jsx'
import './index.css'
import { gitLoad } from './components/home/Home.jsx'
import { Route } from 'react-router-dom'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { StrictMode } from 'react'
import { About,Home, Contact,User, Github } from './components/Index1.js'
/*
const router1 = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"about",
            element:<About/>
        },
        
       
        {
            path:"contact",
            element:<Contact/>
        },
         {
            path:"github",
            element:<Github/>
        },

        {
            path:"user",
            //  path:"user/:userid"   will not work only work with Route.....
            element:<User/>
        }
    ]}
])
    */


// it has a simpler syntax also_______
  ///     we can do like  __   
  const router1 = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='user/:userid' element={<User/>}/>
            <Route path='github' element={<Github/>}
            loader={gitLoad} />
        </Route>
    ))

createRoot(document.getElementById('root')).render(
    <StrictMode>

    <RouterProvider router={router1}/>

    </StrictMode>
  
)
