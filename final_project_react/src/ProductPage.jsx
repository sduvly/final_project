import ProductCard from "./ProductCard"
import SearchBar from "./SearchBar"
import React from 'react'




function ProjectPage({isproduct, handleUpdatePurchase, addSinglePurchase, isSearch, setIsSearch}){
    let searchPage = isproduct.filter(s => s.name.toLowerCase().includes(isSearch))
    return(
        <div className="propage">
           
          <SearchBar isSearch={isSearch} setIsSearch={setIsSearch}/> 
         {searchPage.map(p => <ProductCard  key={p.id} business_product={p} addSinglePurchase={addSinglePurchase} handleUpdatePurchase={handleUpdatePurchase} />)}
         
        </div>
    )
}

export default ProjectPage

