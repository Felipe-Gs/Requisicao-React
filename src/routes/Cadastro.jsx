import React from 'react'
import { useState } from 'react'
import api from '../ApiAxios/axiosRota'

export const Cadastro = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')
    const [id, setId] = useState('')


    

    async function FazerCadastro(e){
        e.preventDefault();
        const response = await api.post('/cadastro', 
            JSON.stringify({email, password, nome})
        )
        // console.log(response.data)
        // newUser.push(...users, {email, password, nome})
        // users.push(...users, newUser)
        // console.log(users)
    }

  return (
    <div style={{justifyContent:"center", alignItems:"center", display:"flex", flexDirection:'column'}}>
       <h1>Realize seu cadastro</h1>
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
         <input 
            type={'text'} 
            name={'nome'} 
            placeholder={'Nome'} 
            required
            onChange={(e) => setNome(e.target.value)}
         >
         </input>
         <button onClick={(e)=> FazerCadastro(e)} type="submit" className='btn-login'>Login</button>
         
       </form>
    </div>
  )
}
