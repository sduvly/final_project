import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"



function ProjectPage({isproduct, handleUpdatePurchase, addSinglePurchase, isSearch, setIsSearch}){
    let searchPage = isproduct.filter(s => s.Area.toLowerCase().includes(isSearch))
    return(
        <>
           
          <SearchBar isSearch={isSearch} setIsSearch={setIsSearch}/> 
         {searchPage.map(p => <ProductCard  key={p.id} business_product={p} addSinglePurchase={addSinglePurchase} handleUpdatePurchase={handleUpdatePurchase} />)}
       
        </>
    )
}

export default ProjectPage

