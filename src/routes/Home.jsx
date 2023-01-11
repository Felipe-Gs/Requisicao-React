import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import blogFecht from '../axios/config';
// context
import {useAuth} from '../../src/hooks/useAuth';

import { Link, useParams } from 'react-router-dom'
import "./Home.css"



const Home = () => {
  const {posts, getPosts} =useAuth();

  useEffect(()=>{

    getPosts()

  },[])


  return (
    <div className='home'>
      <h2>Home</h2>
      
      <h1>Ultimos posts: </h1>
      {posts.length ===  0 ? (<p>carregando...</p> ) : (
        posts.map((post) =>(
          <div className="post" key={post.id}>
           <h2>{post.title}</h2> 
           <p>{post.body}</p> 
           <p>{post.id}</p>
          <Link to={`emails/${post.id}`}className='btn'>Ler mais</Link>
          
          </div>
        ))
      )}
      
    </div>

  )
}

export default Home