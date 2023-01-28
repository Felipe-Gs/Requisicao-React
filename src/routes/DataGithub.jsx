import React, {useState, useEffect} from 'react'
import apigoogle from '../axiosGoogle/config';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Animations from '../components/Animations';
import { Input } from '@mui/material';
import './DataGithub.css'



const DataGithub = () => {

  const [perfil, setPerfil] = useState('')


  const [dados, setDados] = useState({})

  const getUsuarios = async (perfil)=>{
      try {
        <Animations/>
          const response = await apigoogle.get(`/users/${perfil}`)
          const data = response.data;
          setDados(data)
        //   console.log(data)
        setPerfil('')
          
      } catch (error) {
          console.log(error)
      }
  }


  return (
    <div  className='home'>
        <h1>Dados github</h1>
        <div style={{ display:"flex", justifyContent:"center"}}>
            <Input 
                sx={{width: 300, color:"white"}} 
                variant="outlined" 
                placeholder='Digite seu perfil'
                onChange={(e) => setPerfil(e.target.value)}
            > 
            </Input>
            <Button 
                style={{marginLeft:'15px'}}
                variant="outlined"
                onClick={()=>(getUsuarios(perfil))}
            >
                Buscar dados
            </Button>
        </div>
      <div style={{display:'flex', justifyContent:"space-around", flex:1}}>
        <div style={{width:'500px', height:'400px', marginTop:'50px', justifyContent:"space-around", flex:1}}>
            {dados.name?
                <div style={{display:"flex", justifyContent:'space-around', flex:1, alignItems:"center"}}>
                    <div style={{}}>
                        <p className='texto'>Nome: {dados.name}</p>
                        <p className='texto'>Seguidores: {dados.followers}</p>
                        <p className='texto'>Biografia: {dados.bio}</p>
                        <p className='texto'>Formação: {dados.company}</p>
                        <p className='texto'>Blog: {dados.blog}</p>
                        <p className='texto'>Localização: {dados.location}</p>
                        <p className='texto'>Criado em: {dados.created_at}</p>
                    </div>
                    <div>
                        <img style={{width:'200px', height:'200px', borderRadius:'50%'}} src={dados.avatar_url} alt='imagem do github'/>
                    </div>
                </div>
            : <Animations  />}
        </div>
      </div>
    </div>
  )
}


export default DataGithub