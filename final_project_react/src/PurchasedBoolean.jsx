import {useState} from 'react'
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
        <>
        <p>{pur.business_product.name} --- {pur.purchase ? "Purchased" : <><button onClick={handlePurchase}>Buy</button> <button onClick={handleRemove}>Remove</button></>} </p>
        </>
    )
}
 export default PurchasedBoolean