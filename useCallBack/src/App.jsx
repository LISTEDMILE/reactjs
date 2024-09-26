import { useState ,useEffect,useRef, useCallback} from 'react'
import './app.css'
function App() {
  //use call back functio syntax:  ((  useCallback(fn,array)  ))  -->  used if we want a function to run
  //when a particular variable is changed aur something is altered.....

  //Math.random()   returns 0 or 1....

  //charAt syntan((  str.chatAt(index)  ))  used to access a char from a string....

  // can see using simple checkbox and text and more input tags bellow....


  // onChange={(e)=>{setLength(e.target.value)}}    -->   onChange is used when we want someting on change
  // oncheange=event which contains a function to perform   we can have value of the tag or attribute in which it is used
  //  using e.target.value.....

  //prev is used for previous value   see checkbox input.....
  

  // if hm direct usecallback ko call karte h to wo infinite loop me chla jaega to uske liye hm useEffect use karte h.....
  
  //    window.navigator.clipboard.writeText(password);   --> used to copy something to clipboard
  //  passref.current?.select();  --> used to select any element
  //useRef is uef to provide ref to some elements   in any element write ref=(name of var for ref).....
  
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] =useState(false);
  const [password, setPassword] =useState("");
  const [Copy1, setcopy] =useState("Copy");

  const passref = useRef(null)
  const copyy = ()=>{
    setcopy("Copied");
    document.getElementById('answer').style="background-color:black; box-shadow:none;";
    passref.current?.select();
    window.navigator.clipboard.writeText(password);
  }




  const passgenerator = useCallback(() => {
    setcopy("Copy");
    document.getElementById('answer').style="background-color: rgb(0, 15, 13); box-shadow: 0px  0px 20px 1px yellow;";
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str=str+"0123456789";
    
      if (character){
        str=str+"!~#$%^&*()-_+={[\|';:?/>.<,"
      }
    for(let i=1; i<=length; i++){
      let index = Math.floor(Math.random()*str.length)
      pass = pass+str.charAt(index);
    
    }
    setPassword(pass)
    
  },[length,number,character,setPassword])
  
  useEffect(() => {passgenerator()},[length,number,character,setPassword])
  return (
    <>
    <h1 id="h1" className='text-5xl m-8 text-center'>Password Generator</h1>
<h2 className='text-3xl'> Create a hard password respect your privacy....</h2>
     <div className=' w-min  mx-auto shadow-md rounded-lg px-10 my-20 py-3  bg-gray-700'>
    <div className='flex shadow  text-black rounded-lg overflow-hidden mb-4 ' >  <input 
      type="text"
      value={password}
      readOnly
      className=' outline-none w-full py-1 px-3'
      placeholder="password"
      ref={passref} />
      <button 
      id="button"
      onClick={copyy} 
      className='bg-blue-950 text-white outline-none shrink-0 px-3 py-2'>
        {Copy1}
      </button>
      </div>
      <div className='flex text-xl gap-x-11 px-3'>
        <div className='flex items-center gap-x-2'>
          <input type="range"
          min={8}
          max={16}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length} </label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input type="checkbox"
          defaultChecked={number}
          
          
          onChange={()=> {setNumber((prev)=>!prev)}}
          />
          <label>:Numbers </label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input type="checkbox"
          defaultChecked={character}
          
          
          onChange={()=> {setCharacter((prev)=>!prev)}}
          />
          <label>:Characters </label>
        </div>
      </div>
      </div>
      <center>
    <h1 onClick={copyy} id="answer" className='text-5xl  m-8 text-center'>{password} </h1>
    </center><h3 className='my-20 text-xl'>*Remember to not forget your password....</h3>
      

    </>
  )
}

export default App
