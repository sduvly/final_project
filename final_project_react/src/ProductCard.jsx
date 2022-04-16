import {useState} from 'react'
import PageDetail from './PageDetail'
import React from 'react'


function ProductCard({business_product, addSinglePurchase}){
     const [isvisible, setIsvisible] = useState(false)
     
     function click(e){
         console.log(e)
        e.preventDefault()
       setIsvisible(isvisible => !isvisible)

   }

   function addToCart(){
       window.confirm(business_product.name + " added to purchases")
     fetch("http://localhost:3000/purchases", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            purchase: false,
            business_product_id: business_product.id,
            user_id: 13
        })
     })
     .then(resp => resp.json())
     .then(p => addSinglePurchase(p))
   }
   

    return(
          <div className="proCard">


             <div className="grid">
             <div className="g-col-6 g-col-md-4" >{business_product.name}</div>
             <div className="g-col-6 g-col-md-4">{business_product.price}$</div>
             <img className="g-col-6 g-col-md-4" alt=""onClick={click} src={business_product.image} />
             </div>
             <button onClick={addToCart}>Buy</button>
           {isvisible ?  <PageDetail stock={business_product.product.stock} rating={business_product.product.rating} description={business_product.product.description}/>: null }
        </div>
    )
}

export default ProductCard

