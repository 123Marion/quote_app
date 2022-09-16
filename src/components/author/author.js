import React from "react";

function Author({quotes}){
    return(
        <>
        {quotes.map((quote)=>(
            <li className="author" >{quote.author}</li>
        ))}
        </>
    )
}
export default Author