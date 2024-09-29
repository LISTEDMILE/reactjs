import { useState } from 'react'
import './App.css'
import { InputBox } from './components/index.js'
import useCurrencyInfo from './hooks/firsthook.js'

  //hooks ara just simple functions returning some values ex-useStates majorly written on js


  //  js  fetch() used to fetch apis.----
  //  .then is used to ferform any task after fatching apis.----
  //  res used to point to the response from the api.-----
  //  see firsthook.js for source code......



  //  from input.jsx onchange me e= on amount change pehle check karenge fir doosri bar me on amount change me hi value dalenge crash condition ko bachane ke liye.....
  

  //  hmne yha components me do file bnai h ye ek concept h sari export files bnao kisi ek me import karo aur fir us nyi file ko app.jsx ya final kisi file me export karo to confusion ke chance kam honge........

  //  use id (from input.jsx) used to generate a random id to use......

  //  se in onsubmit event we dont want submit so we use e. preventDefault......
  function App(){

    const [amount,setAmount] = useState(0)
    const [from,setFrom] = useState("usd")
    const [to,setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
  
    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)
  
    const swap = () => {
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
  
    }
  
    const convert = () => {setConvertedAmount(amount * currencyInfo[to])
  
    }

    
    

      return (
          <div id="background"
              className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          >
              <div className="w-full">
                  <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                      <form
                          onSubmit={(e) => {
                              e.preventDefault();
                             convert()
                          }}
                      >
                          <div className="w-full mb-1">
                              <InputBox
                                  label="From"
                                  amount={amount}
                                  currencyOption={options}
                                  onCurrencyChange={(currency)=> setAmount(amount)}
                                  selectCurrency={from}
                                  onAmountChange={(amount) => setAmount(amount)}
                              />
                          </div>
                          <div className="relative w-full h-0.5">
                              <button
                                  type="button"
                                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                  onClick={swap}
                              >
                                  swap
                              </button>
                          </div>
                          <div className="w-full mt-1 mb-4">
                              <InputBox
                                  label="To"
                                  amount={convertedAmount}
                                  currencyOption={options}
                                  onCurrencyChange={(currency)=>setTo(currency)}
                                  selectCurrency={from}
                                  amountDisable
                              />
                          </div>
                          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                              Convert {from.toUpperCase()} to {to.toUpperCase()}
                          </button>
                      </form>
                  </div>
              </div>
          </div>
      );
}

export default App
