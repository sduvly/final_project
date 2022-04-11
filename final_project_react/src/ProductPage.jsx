import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"
import ShoppingCart from "./ShoppingCart"



function ProjectPage({isproduct, handleUpdatePurchase, addSinglePurchase, isSearch, setIsSearch}){
    let searchPage = isproduct.filter(s => s.name.toLowerCase().includes(isSearch))
    return(
        <>
           
          <SearchBar isSearch={isSearch} setIsSearch={setIsSearch}/> 
         {searchPage.map(p => <ProductCard  key={p.id} business_product={p} addSinglePurchase={addSinglePurchase} handleUpdatePurchase={handleUpdatePurchase} />)}
         <ShoppingCart />
        </>
    )
}

export default ProjectPage

