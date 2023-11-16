import React, { useState } from 'react'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email,password})
        .then(res=>console.log(res))
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 justifi-content-center aling items-center'>
        <div className='p-3 bg-white w-25'> 
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">email</label>
                    <input type="email" placeholder='email' className='form-control'
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                
                <div className='mb-3'>
                    <label htmlFor="psw">psw</label>
                    <input type="password" placeholder='psw' className='form-control'
                    onChange={e=>setPassword(e.target.value)}/>
                </div>
                <button className='btn btn-success'>login</button>
            </form>
        </div>
    </div>
  )
}

export default Login