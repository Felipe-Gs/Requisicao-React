import { createContext, useState, useEffect} from "react";
import blogFecht from "../axios/config";
import { useParams } from 'react-router-dom';

export const AuthContext = createContext({});


export function AuthContextProvider({ children }){
    
    // funcoes do emails
    // const [id, setId] = useState(2)
    const [emails, setEmails] = useState([])
    

    const getEmails = async(posicao)=>{
        try {

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
          const response = await blogFecht.get("/posts/");
    
          const data = response.data;
          setPosts(data);
          // console.log(response.data)
          
        } catch (error) {
          console.log(error)
        }
      }

    

    return(
        <AuthContext.Provider value={{
            getEmails,
            getPosts,
            posts,
            emails,
            
        }}>
            {children}

        </AuthContext.Provider>
    )
}