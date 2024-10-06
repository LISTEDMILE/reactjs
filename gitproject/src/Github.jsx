
import './git.css'
import React, { useState , useEffect} from "react";
 function Git(){
    const [follow,setFollow] = useState([]);
    const [a,setA] = useState("");
    useEffect(()=>{
        fetch(`https://api.github.com/users/${a}`)
        .then(Response=>Response.json())
        .then(data=>setFollow(data))
    },[a]);

    return(<>

    <header>
    <div>LOGO</div>
    <div><h1> GET GITHUB INFO</h1></div>
    <div id="div2"><a>ABOUT</a><a>Help</a><a>Contact Us</a></div>
    </header>
    
    <div className="flex  justify-center">
       <div> Enter any profile:
        <input className='mx-8 my-4 mr-16  bg-slate-300 text-black p-2 text-center' 
        placeholder='git username' 
        onChange={(e)=>{setA(e.target.value);}}/>
        
        
        
        </div></div><div id="main1"><div id="main">
        <div id="img">
        <img
                       
                                src={follow.avatar_url}
                                className="h-60"
                                alt="Logo"
                            />


                          
            
            <div id="info">
            <div> User Id :  {follow.id}</div> 
            <div> Followes: {follow.followers}</div>
                
<div>
    Following: {follow.following}
</div>


                </div></div>
              
                <div id="info2">
                <div class="updated">
                    Created On : 
                    <div>
                        {follow.created_at}
                    </div>
                </div>
                <div class="updated">
                
        
            Updated On : 
            <div>{follow.updated_at}
            </div>  </div></div>
            </div>
</div>
</>
    )
}

export default Git