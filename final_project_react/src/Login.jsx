import {useState} from 'react'

function Login(){
    const [islogin, setIslogin] = useState({
        username:"",
        password_digest: ""
    })
    function change(e){
        e.preventDefault()
        setIslogin({...islogin, [e.target.name]: e.target.value})
        console.log(e.target.name)
    }


    function handleSubmit(e){
        e.preventDefault()
        
        console.log(e)
        fetch("http://localhost:3000/users", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(islogin)
        })
        .then(resp => resp.json())
        .then(log => {console.log(log)
        setIslogin(log)
        })
    
    }

    return(
        <div className="firstPage">
        <div className="form-floating mb-3">
           <input type="email" className="form-control" id="floatingInput" placeholder="username" onChange={change} 
           name="username" value={islogin.username}/>
           <label htmlFor="floatingInput">username</label>
           </div>
           <div className="form-floating">
           <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={change} 
           name="password_digest" value={islogin.password_digest}/>
           <label htmlFor="floatingPassword">Password</label>
           </div>
           <button type="submit" onChange={handleSubmit} >Login</button>
        </div> 
    )
}
export default Login