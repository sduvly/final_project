import PurchasedBoolean from "./PurchasedBoolean"
function Purchased({ispurchased, handleUpdatePurchase}){

    return(
        <>
           {ispurchased.map(pur => <PurchasedBoolean  key={pur.id} pur={pur} handleUpdatePurchase={handleUpdatePurchase}/>)}
        </>
    )
}

export default Purchased