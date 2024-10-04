import { Outlet } from 'react-router-dom'
import './App.css'
import { Header} from './components/Index1'
import {Footer} from './components/Index1'


function App() {

  //  Link , NavLink, and a tag  three are same but Link do not refresh and reload whole page as a and NavLink is same as Link with some extra functionalities.
  //  to use Link <Link To="#"......

  //  in className isActive is used to check the same is active or not we can put design conditions  for ex go to header.jsx in header in components . There in NavLink className.....
  
  //  if multiple pages h aur hm nhi chahte sabme alag alg link dobara dobara dale jae
  //  to hm RouterProvider ka use karenge usme hme ek object pass karna hoga jaise main .jsx me hmne router1 pass kiya h
  //  aur usko define karna hoga through createBrowserRouter jo contain karega ek array use hoga path, then the element jo hm rakhna chahte h , then aaega children object jo hm nested me rakhna chahte h jitne chahe objects add kar skte h usme hoga path and element......


  //  useParam() method used when we want ki hm url change karte time jo url ke aage wali value h usko ek var me import bhi karle
  //  in user.jsx we wrote a program to import a value from url   in main.jsx user is the path which is given to nav link of Header and /:something means somethng will contain the value provided with the navlink with the same syntax  and it will go to user.jsx.......
  return (
    <>
   <Header/>
   <Outlet/>
   <Footer/>


    </>
  )
}

export default App
