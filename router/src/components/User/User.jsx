import React from 'react'
import {useParams} from 'react-router-dom'
function User(){
    const {userid} = useParams()
    return(
        <div className='bg-slate-600 text-3xl text-white p-4 text-center'> 
        User: The value from the url change and test<br/>[--{userid}--]
        </div>
    )
}
export default User