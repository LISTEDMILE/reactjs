import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn';



function App() {


//  hmne theme.js me useContenx create kiya with initial values deke
//  provider ke liye theme provider export kiya
//  aur function useTheme me ye context export kar diya

//  themebtn.jsx wali file me const with same name like themeMode, lightTheme, darkTheme me useThemes se aai values store kar li kyoki useTheme ek function h jo return kar rha h useContext ki values.
//  hmne onChange pe function call kiya see ThemeBtn.jsx.
//  e.currentTarget.checked return the value after the condition given in equals to checked in input button.

//  then due to useTheme function having context values lightTheme and darkTheme functions from app.jsx will be called
//  then useEffect will be called and themes are changed////

//  most important iske liye ek taiwind me config change hogi see tailwind.config.js........

  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='h-screen dark:bg-slate-900 bg-slate-200'>
        <header>

          <ThemeBtn/>
                   
        </header>
    <div class="circle" id="circle1"></div>
    <div class="circle" id="circle2"></div>
    <div class="circle" id="circle3"></div>
    <div class="circle" id="circle4"></div>
    <div class="circle" id="circle5"></div>
    <div class="circle" id="circle6"></div>
    <div class="circle" id="circle7"></div>
    <div class="circle" id="circle8"></div>
                   
               </div>
          
            </ThemeProvider>
    </>
  )
}

export default App
