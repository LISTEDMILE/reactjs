import {useEffect, useState} from "react"
function useCurrencyInfo(currency){
    // go to app.jsx for notes....
    const [data,setData]=useState({})
    useEffect(()=> {
       /* fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))
    */
    setData({"usd":45,"inr":56})
        },
[currency])
return data
}
export default useCurrencyInfo ;