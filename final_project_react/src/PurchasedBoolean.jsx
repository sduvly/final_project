// import {useState} from 'react'
import React from 'react'

function PurchasedBoolean({pur, handleUpdatePurchase}){
    // const [ispurchase, setIspurchase] = useState(false)
    

    function handlePurchase(){
        console.log("click");
        // send fetch request to update puchase boolean to true
        fetch(`http://localhost:3000/purchases/${pur.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({purchased: !pur.purchase})
        })
        .then(resp => resp.json())
        .then(p => handleUpdatePurchase(p))
    }

    function handleRemove(){
        console.log("click");
        // send fetch request to delete purchase
        fetch(`http://localhost:3000/purchases/${pur.id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(p => handleUpdatePurchase(p))
        
    }



    return(
        <div className="products">
        <p>{pur.business_product.name} --- {pur.purchase ? "Purchased" : <div className="but"><button onClick={handlePurchase}>Repurchase</button> <button onClick={handleRemove}>Remove</button></div>} </p>
        </div>
    )
}
 export default PurchasedBoolean