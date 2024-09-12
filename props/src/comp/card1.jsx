import React from "react";
function Card1({now,when,where=" everywhere"}){
    return(
        <>
        <div>
        <h1>
            what 
        </h1>
        
        <h2>
            {now}
        </h2>
      
        <h1>
            {where}
        </h1>
        <h1>
            {when || "yes"}
        </h1>
        </div>
        <hr/>
        </>
    )
}
export default Card1