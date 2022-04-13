// import '../styles/App.css'
import {Link} from 'react-router-dom'


function Navbar(){
    
    return(
        <div className="nav">
 <nav className="navbarnavbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/home" className="nav-link active" aria-current="page" href="#">Home</Link>
        <Link to="/purchased" className="nav-link" href="#">Purchased</Link>
        <Link to="/sellers" className="nav-link" href="#">Sellers</Link>
      </div>
    </div>
  </div>
</nav>
           
        </div>

    )
}

export default Navbar