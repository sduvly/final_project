import React from 'react'

function PageDetail({description, stock, rating}){

    return(
        <div className="proDetails">
           <p>{description}</p>
           <p>in stock: {stock}</p>
           <p>rating:{rating}</p>
        </div>
    )
}

export default PageDetail