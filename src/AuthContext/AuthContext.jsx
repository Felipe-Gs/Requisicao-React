import { createContext, useState, useEffect} from "react";
import blogFecht from "../axios/config";
import { useParams } from 'react-router-dom';
import Animations from '../components/Animations';
import apigoogle from "../axiosGoogle/config";

export const AuthContext = createContext({});


export function AuthContextProvider({ children }){
    
    // funcoes do emails
    // const [id, setId] = useState(2)
    const [emails, setEmails] = useState([])
    

    const getEmails = async(posicao)=>{
        try {
            <Animations load={true}/>
            const response = await blogFecht.get(`/post/${posicao}/comments`)
            const data = response.data;
            setEmails(data)
        } catch (error) {
            console.log(error)
        }
    }

    // funcoes dos posts
    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
        <Animations load={true}/>
          const response = await blogFecht.get("/posts/");
    
          const data = response.data;
          setPosts(data);
          // console.log(response.data)
          
        } catch (error) {
          console.log(error)
        }
      }

    //   funções para pegar fotos(avatar)
    const [imgs, setImgs] = useState([])
    const getImages = async (posicao) => {
        try {
            <Animations load={true}/>
            const response = await blogFecht.get(`/albums/${posicao}/photos`)
            const data = response.data;
            setImgs(data)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

// api do github
    
   
    

    return(
        <AuthContext.Provider value={{
            getEmails,
            getPosts,
            getImages,
            
            imgs,
            posts,
            emails,
            
        }}>
            {children}

        </AuthContext.Provider>
    )
}