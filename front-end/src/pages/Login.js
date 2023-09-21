
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import background from '../assets/backgroundOne.jpg'
const Login = () => {
  
  const navigation = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /*const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };*/

  const handleSubmit = () => {
   navigation("home");  };

  return (
    <div class=" container-fluid align-items-center  bg-body-tertiary" style={{ height: "100vh", width: "100vw"}}>
      
     <div class="row" style={{padding: 0}}>
      <div class="col-md-6" style={{padding: 0}}>
      <img src={background} alt=""  style={{width: '50vw' ,height: '100vh' }}/>
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-center">        
      
    <div class="form-signin w-100 m-auto" style={{
      maxWidth: 400,
      padding: '1rem',
  
    }}>
  <form style={{marginTop:80}}>
    <img class="mb-4" src={logo} alt="" width="200" height="100" />
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating" style={{marginBottom: 10}}>
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button class="btn w-100 py-2" type="submit" onClick={handleSubmit} style ={{backgroundColor: "#7BAF8A"}}>Sign in</button>
    <p class="mt-5 mb-3 text-body-secondary">&copy; RaqmWave 2023</p>
  </form>
</div>
</div>
</div>
</div>

  );
};

export default Login;
