import {useContext, createContext,} from 'react';


// import { AuthContext, AuthContextDataProps  } from '../contexts/AuthContext';


import { AuthContext } from '../AuthContext/AuthContext';


export function  useAuth(){
    const context = useContext(AuthContext);

    return context;
}