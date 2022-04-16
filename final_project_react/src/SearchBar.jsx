import React from 'react'



function SearchBar({isSearch, setIsSearch}){
    
    function searchProduct(e){
        console.log(e.target.value)
        setIsSearch(e.target.value)
    }
return (<div className="search">
    <input 
            type="text" 
            placeholder="Product name...." 
            name="search"
            onChange={searchProduct}
            value={isSearch}
    />
   
    </div>
    
)
}

export default SearchBar