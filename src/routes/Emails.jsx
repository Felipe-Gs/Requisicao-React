import React, {useState, useEffect} from 'react';
import {useAuth} from '../../src/hooks/useAuth';
import { useParams } from 'react-router-dom';
import Animations from '../components/Animations';
import { Avatar } from '@mui/material';
import './Emails.css';

const Emails = () => {

    const {clicar, getEmails, emails, getImages, imgs} =useAuth();

    const {posicao} = useParams();

    useEffect(()=>{

        getEmails(posicao),
        getImages(posicao)
  


    },[])

  return (
    <div className='home'>
        <h1>Informações adcionais</h1>
      <div className='lado-lado'>
      <div>
          {imgs.length ===  0 ? (<Animations true/> ) : (
                  imgs.map((im)=>(
                    <div className="post" key={im.id}>
                        {
                          emails.map((email) =>(
                            <div className="post" key={im.id}>
                              <Avatar alt="Remy Sharp" src={im.url} />
                              <h2>{email.email}</h2> 
                              <p>{email.body}</p> 
                            </div>
                          ))
                        }
                    </div>
                  ))
                )}
      </div>
      </div>
</div>
  )
}

export default Emails