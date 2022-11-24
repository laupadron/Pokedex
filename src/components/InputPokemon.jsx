import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import { Player } from '@lottiefiles/react-lottie-player';


 

const InputPokemon = () => {
 // estado para controlar el input
 const [nameUser,setNameUser]=useState("");
 // navigate para ir hacia la pagina que indicamos en la funcion
 const navigate=useNavigate();
 // dispatch para cambiar nombre
 const dispatch=useDispatch();
// funcion para ir hacia la pagina,se pasa al onClick
 const nameValidation=()=>{
  dispatch(changeName(nameUser));
  navigate("/pokedex");
 }
 

 return (
  
  <div className='container-input'>
   
    
   <h1>Hello Poketrainer!!!</h1>
   <Player src='https://assets6.lottiefiles.com/packages/lf20_mrg9xhbm.json' 
   className='player'
   loop
   autoplay
   speed={1}
   style={{width:"300px", eight:"300px"}}/>
   <p>Enter your name to start the search</p>
   <form className="input-btn"> 
    <input type="text" onChange={e=>setNameUser(e.target.value)}value={nameUser}/>
    <i class="fa-brands fa-centercode" onClick={nameValidation} style={{fontSize:"30px"}}></i>   
   </form>
   <div className="bubbles">
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
   </div>
   
    
  </div>
  
    
  
    
   
 );
 }


export default InputPokemon;