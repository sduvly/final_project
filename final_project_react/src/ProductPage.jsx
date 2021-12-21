import ProductCard from "./ProductCard"



function ProjectPage({isproduct, handleUpdatePurchase, addSinglePurchase}){
    
    return(
        <>
           
           
         {isproduct.map(p => <ProductCard  key={p.id} business_product={p} addSinglePurchase={addSinglePurchase} handleUpdatePurchase={handleUpdatePurchase} />)}
       
        </>
    )
}

export default ProjectPage

