import { useState } from 'react'
//hooks ^ isse import hoga

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var a=0;

  // use state method used when we want to change something at multiple places on web
  //here b is the variable to change 
  // add value is the function to occur
  //useState(()) is the default value
  let [b, addValue] = useState(40);

  //it is a kind of function which will be called with the constant defined without paranthesis (arrow fn())
  // {something in html is reffered to value stored in that var}
  const clickmethod = () => {
    a+=10;
    console.log(a);
  }
  let clickSetValues = () => {

    if(b==120){
      alert("value cannot be greater than 120;");
    }

    else{
    //useState function called here
    addValue(b+10);
    }
  }
  let clickSetValuesN = () => {

    if(b==0){
      alert("value cannot be less than 0;");
    }

    else{
    //useState function called here
    addValue(b-10);
    }

  }


  return (
    <>
    
      <h1>HI click button to add values {a} </h1>
      <br/>
      <br/>
      <button onClick={clickmethod}>
        click here add 10
      </button>
      <br/>
      <br/>
      <h1>HI click button to add values  through setvalues {b}  <br/> {b} <br/> {b} <br/> </h1>
      <br/>
      <br/>
      <button onClick={clickSetValues}>
        click here add 10
      </button>
      <button onClick={clickSetValuesN}>
        click here subtract 10
      </button>
      
    </>
  )
}

export default App
