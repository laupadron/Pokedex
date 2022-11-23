import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCards from './PokemonCards';
import { Player } from '@lottiefiles/react-lottie-player';

const Pokedex = () => {
 // useSelector para traer el nombre delDOM de react
 // el que se ingreso en input
 const greeting= useSelector(state=>state.name);
 const[characters,setCharacters]=useState([]);
 const[characterName,setCharacterName]=useState("");
 const[locations,setLocations]=useState([]);
 // estado para input tipo switch
 const [findeType,setFindeType]=useState(true);


 useEffect(()=>{
  axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
  .then(res=>setCharacters(res.data.results))

  axios.get("https://pokeapi.co/api/v2/type/")
  .then(res=>setLocations(res.data.results))
 },[])
 

 //PAGINACION
 const [pagination,setPagination]=useState(1);
 const pokemonsPerPage=15;
 const lastIndex=pagination*pokemonsPerPage;
 const firstIndex=lastIndex-pokemonsPerPage;
 const pokemonsPaginated = characters.slice(firstIndex,lastIndex);
 const totalPages= Math.ceil(characters.length/pokemonsPerPage);
 
 // f para on click search
 const navigate= useNavigate()
 const searchCharacter=()=>{
  navigate(`/pokedex/${characterName.toLocaleLowerCase()}`)
 }
 // f para on change del filtrado
 const filterType=(e)=>{
   const url = e.target.value;
   axios.get(url)
   .then(res=>setCharacters(res.data.pokemon))
 }
 // f para cambiar switch
 const changeSwitch=()=>{
 findeType?setFindeType(false):setFindeType(true)
 }
 
 return (
  
<div className='pokedex'>
   <Player src='https://assets7.lottiefiles.com/temp/lf20_Tw0dyZ.json' 
   className='player'
   loop
   autoplay
   speed={1}
   style={{width:"250px", eight:"250px"}}/>
   
   <h1>Welcome {greeting}</h1>
   <p>Here you can find your favorite pokemon</p>
  
  <div className="check-container">
   <input type="checkbox" id='btn-switch' onClick={changeSwitch} />
    {findeType?
   <>
    <p>Name</p>
    <input type="text" placeholder='search character' value={characterName} onChange={e=>setCharacterName(e.target.value)} />
    <i class="fa-brands fa-centercode" onClick={searchCharacter} style={{fontSize:"30px"}}></i>
   </>:
   <>
    <p>Type</p>
    <select onChange={filterType} name="" id="">
     {locations.map((location) => (
     <option value={location.url} key={location.url}>{location.name}</option>
     ))}
    </select>
   </>
    }
   <label htmlFor="btn-switch" className='label-switch'></label>
   
   
  </div>
  <div className="btn-pagination">
    <button onClick={()=>setPagination(pagination-1)}
    disabled={pagination===1} className='prev-next'
      >Prev Page</button>
    <button onClick={()=>setPagination(pagination+1)}
    disabled={pagination===totalPages} className='prev-next'
    >Next Page</button>
   </div>
 <ul className='pagination-items'>
  {pokemonsPaginated.map((character)=>(
   <div className="container" key={character.url? character.url : character.pokemon.url}>
    <li >
    <PokemonCards url={character.url? character.url : character.pokemon.url}
     />
    </li>
   </div>
   
     ))}
   
    
   
  </ul>
   
  
 
   
</div>
 );
};

export default Pokedex;