import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import icon from '../images/logo.png'
import axios from "../axios/axios"
import { useState } from 'react';













function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()



    const userLogin = ()=>{

        axios({
            method: 'post',
            url: 'http://localhost:8080/login',
            data: {
              email: email,
              password: password
            }
          }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });;

       
          


    }








    return (  
    <>
    <Container>
        <div className="text-center">
            <Link to="/" style={{textDecoration:"none",}}><button className='btn m-4 text-white' style={{ backgroundColor:"#8458B3", display:"flex", alignItems:"flex-start", justifyContent:"flex-start"}}>Буцах</button></Link>
            <main className="form-signin w-100 m-auto p-4">
           
                <img className="mb-4" src={icon} alt width={72} height={57} />
                <h1 className="h3 mb-3 fw-normal">Нэвтрэх</h1>
                <div className="form-floating">
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control mb-4" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Утасны дугаар</label>
                </div>
                <div className="form-floating">
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Нууц үг</label>
                </div>
                <div className="checkbox mb-3 mt-3  ">
                    <label>
                    <input type="checkbox" defaultValue="remember-me" /> Сануулах
                    </label>
                </div>
                <button className="w-100 btn btn " onClick={userLogin} style={{ backgroundColor:"#8458B3"}} type="submit">Нэвтрэх</button>
               
            </main>
            </div>
    </Container>



    
    
    
    </>);
}

export default Login;