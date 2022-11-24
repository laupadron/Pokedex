import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCards = ({url}) => {
const [character,setCharacter]=useState({});



useEffect(()=>{
axios.get(url)
.then(res=>setCharacter(res.data))
},[]);


 return (
 <Link to={`/pokedex/${character.id}`}>
  
  <div className={`cards-container ${character.types?.[0].type?.name}`}>
  
   
    <div className={`info-cards `}>
     <h3>{character.name}</h3>
     <p>Type: {character.types?.[0].type?.name}</p>
     <p>Hp: {character.stats?.[0].base_stat}</p>
     <p>Attack: {character.stats?.[1].base_stat}</p>
     <p>Defense: {character.stats?.[2].base_stat}</p>
     <p>Speed: {character.stats?.[5].base_stat}</p>
    </div>
    <img src={character.sprites?.other.dream_world.front_default} alt="" />
   
  </div>
 </Link>
  
 
  
 
 

 );
};

export default PokemonCards;