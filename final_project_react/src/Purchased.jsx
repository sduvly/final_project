import React from 'react'

import PurchasedBoolean from "./PurchasedBoolean"
function Purchased({ispurchased, handleUpdatePurchase}){

    return(
        <div className="pur">
           {ispurchased.map(pur => <PurchasedBoolean  key={pur.id} pur={pur} handleUpdatePurchase={handleUpdatePurchase}/>)}
        </div>
    )
}

export default Purchased