import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './comp/card.jsx'
import Card1 from './comp/card1.jsx'


function App() {
  const [count, setCount] = useState(0)
//these username and all are the simple var just like parameters
//if we use (props) inside paranthesis where this card fn is defined
// then it will be inherited by the fn as object
// we can also call these var as element of object

//we can also call these var directly
//in last 3 statements the  whole card is same but now var is changing we have used a var parameter in Card1 fn which is being called from here.....
// we can also call objects or arrays but not directly first we have to store them in a new variable...
  return (
    <>
      <h1>PROPS</h1>
      <Card username="first" lastname="last"/>
      <Card this="this" that="that"/>
      <Card has="has" have="have"/>
      <Card1 now="go"/>
      <Card1 now="come"/>
      <Card1 now="nothing"/>

      
    </>
  )
}

export default App
