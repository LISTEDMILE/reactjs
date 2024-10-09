import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
function App() {
  
//  useContext is used when we want to access some elements to differents files in a react project. here we first created a file UserContext.js in context folder
//  then we created a context and stored it in a const and exported it.
//  then it is imported in UserContextProvider.jsx file in conext folder.
//  then created a const with UserContextProvider with parameter children .
//  then created a useState with user and setUser and given it null, then we return (<UserContext.Provider value="user,setUser"> ans {children and closing tag} )
//  which means that it will be the provider which will be interecting either providing or taking values.
//  value that will be interecting are user and setUser.
//  then with useContext imported setUser in Profile.jsx. and altered values of const user.
//  then simply these values with the help of useContext we have accessed in the Login.jsx......


  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
