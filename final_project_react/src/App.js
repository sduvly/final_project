import {useEffect, useState} from "react"
import ProjectPage from "./ProductPage"
import Purchased from "./Purchased"
import Seller from "./Seller"
import Navbar from "./Navbar"
import {Route, Routes} from "react-router-dom"
import Login from "./Login"
function App() {
  const [isproduct, setIsproduct] = useState([])
  const [ispurchased, setIspurchased] = useState([])
  const [isSearch, setIsSearch] = useState('')

  function handleUpdatePurchase(allPurchases) {
    setIspurchased(allPurchases)
  }

  function addSinglePurchase(newPurchase) {
    setIspurchased(ispurchased => [newPurchase, ...ispurchased])
  }

  useEffect(() => {
    fetch("http://localhost:3000/business_products")
    .then(res => res.json())
    .then(pro => {
      console.log(pro)
      setIsproduct(pro)
    })
  }, [])

    useEffect(() => {
        fetch("http://localhost:3000/purchases")
        .then(res => res.json())
        .then(purchase => {
          console.log(purchase)
           setIspurchased(purchase)
        })
      }, [])

  return (
    <div className="App">
      <div className='header'>
      <h1>OSAOS</h1>
      </div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Login  /> } />
        <Route exact path="/home" element={ <ProjectPage addSinglePurchase={addSinglePurchase} isproduct={isproduct} handleUpdatePurchase={handleUpdatePurchase} isSearch={isSearch} setIsSearch={setIsSearch}/> } />
        <Route exact path="/purchased" element={<Purchased ispurchased={ispurchased} handleUpdatePurchase={handleUpdatePurchase}/>} />
        <Route exact path="/sellers" element={<Seller />} />
     </Routes>
    
    </div>
  );
}

export default App;
