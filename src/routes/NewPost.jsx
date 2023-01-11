import React, {useState} from 'react'
import './NewPost.css';
import { useNavigate } from 'react-router-dom';
// link da api:  https://jsonplaceholder.typicode.com/guide/
// axios
import blogFetch from "../axios/config";

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async(e)=>{
    e.preventDefault();

    const post = {title, body, userId:1}
    await blogFetch.post("/posts", {
      body: post,
    });

    navigate('/')
  }

  return (
    <div className='new-post'>
      <h2>Inserir novo post: </h2>
      <form onSubmit={(e)=> createPost(e)}>
        <div className="form-control">
          <label htmlFor='title'>Titulo</label>
          <input onChange={(e)=> setTitle(e.target.value)} type="text" name='title' placeholder='Digtie o titulo' id='title'></input>
        </div>

        <div className="form-control">
          <label htmlFor='body'>Conteudo:</label>
          <textarea onChange={(e)=> setBody(e.target.value)} name='body' id='body' placeholder='digite o conteudo'></textarea>
        </div>
        <input type='submit' value='criar post' className='btn'></input>
      </form>
    </div>
  )
}

export default NewPost
