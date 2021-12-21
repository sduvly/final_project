import {useState} from 'react'

function Seller(props){
    const [isform, setisform] = useState({
        name: "",
        image: "",
        price: "",
        businessName: "",
        description: "",
        stock: "",
        rating: "",
    }
    
    )
    function handleChange(e){
        e.preventDefault()
        setisform({...isform, [e.target.name]: e.target.value})
        console.log(e.target.name)
    }
    function handleSubmit(e){
        e.preventDefault()
        
    console.log(e)
    fetch("http://localhost:3000/business_products", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(isform)
    })
    .then(resp => resp.json())
    .then(n => setisform(n))
    
    }
    return(
        <>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name" onChange={handleChange} 
  value={props.isform} />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Image</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Image" onChange={handleChange} 
  value={props.isform} />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Price</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Price" onChange={handleChange} 
  value={props.isform} />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">BusinessName</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="BusinessName" onChange={handleChange} 
  value={props.isform} />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Description</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Description" onChange={handleChange} 
  value={props.isform} />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Stock</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Stock" onChange={handleChange} 
  value={props.isform} />
</div> 
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Rating</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Rating" onChange={handleChange} 
  value={props.isform} />
</div>
<input 
    type="submit" 
    value="Submit"
    onChange={handleSubmit}  
    />
        
        </>
    )
}

export default Seller




