import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import './Login.css'
import api from '../ApiAxios/axiosRota';

import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);


    const handleLogin = async(e) => {
        e.preventDefault();
        try {
          const response = await api.post('/login', 
              JSON.stringify({email, password}),
          );
          navigate('/Home')
        } catch (error) {
          if(error.response){
            setError(error.response.data.message)
          }else{
            setError("erro desconhecido!")
          }
        }
    }
    
  return (
    <div style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:'column'}}>
       <h1>Autenticação de Login</h1>
       <form className='login-form'>
        <input 
            type={'email'} 
            name={'email'} 
            placeholder={'email'} 
            required
            onChange={(e) => setEmail(e.target.value)}
        >
        </input>
         <input 
            type={'password'} 
            name={'password'} 
            placeholder={'password'} 
            required
            onChange={(e) => setPassword(e.target.value)}
         >
         </input>
         <button onClick={(e) => handleLogin(e)} type="submit" className='btn-login'>Login</button>
         {
          error? <button onClick={()=> navigate('/cadastro')}  type="button" className='btn-login'>Cadastro</button> : <p></p>
         }
         
       </form>
       <p>{error}</p>
    </div>
  )
}
