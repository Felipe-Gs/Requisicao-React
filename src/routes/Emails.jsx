import React, {useState, useEffect} from 'react';
import blogFecht from '../axios/config';
import {useAuth} from '../../src/hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import './Emails.css';

const Emails = () => {

    const {clicar, getEmails, emails} =useAuth();

    const {posicao} = useParams();

    useEffect(()=>{

        getEmails(posicao)

    },[])

  return (
    <div className='home'>
      <h1>Informações adcionais</h1>
      <p>{posicao}</p>
      {console.log(posicao)}
      <button title='teste' onClick={clicar}>teste auth</button>
      {emails.length ===  0 ? (<p>carregando...</p> ) : (
        emails.map((email) =>(
          <div className="post" key={email.id}>
           <h2>{email.email}</h2> 
           <p>{email.body}</p> 
          </div>
        ))
      )}
      
    </div>
  )
}

export default Emails