

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const PokemonDetail = () => {
const[character,setCharacter]=useState({});
const { id } = useParams();

useEffect(()=>{
axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(res=>setCharacter(res.data))
},[])
console.log(character)
 return (
  
  <div className={`details-container ${character.types?.[0].type?.name}`}>
   
   
   <img src={character.sprites?.other['home'].front_default} alt="" />
   <div className="principal">
    <div className="sub-principal1">
     <h3>{character.weight}</h3>
     <p>Weight</p>
    </div>
    <div className='sub-name'>
     <h1>{character.name}</h1>
     <p>#{character.id}</p>
    </div>
    <div className="sub-principal2">
     <h3>{character.height}</h3>
     <p>Height</p>
    </div>
   </div>
   <div className="id-info">
    <div className={`abilities ${character.types?.[0].type?.name}`}>
     <p><b>Habilities</b> </p>
     <p>{character.abilities?.[0]?.ability.name} <br /> {character.abilities?.[1]?.ability.name}</p>
    </div>
    <div className={`type ${character.types?.[0].type?.name}`}>
     <p><b>Type</b> </p>
     <p>{character.types?.[0].type?.name}</p> 
      
    </div>
    
   </div>
   <div className="general-progress">
    <div className='categorys' >
     <p className={`categorys ${character.types?.[0].type?.name}`}>HP</p>
     <p className={`categorys ${character.types?.[0].type?.name}`}>Speed</p>
     <p className={`categorys ${character.types?.[0].type?.name}`}>Attack</p>
     <p className={`categorys ${character.types?.[0].type?.name}`}>Defense</p>
    </div>
    <div>
     <div className="container-Bar">
      <div className="progressBar" >{character.stats?.[0].base_stat} </div>
     </div>
     <div className="container-Bar">
      <div className="progressBar1">{character.stats?.[5].base_stat}</div>
     </div>
     <div className="container-Bar"> 
      <div className="progressBar2">{character.stats?.[1].base_stat}</div>
     </div>
     <div className="container-Bar"> 
      <div className="progressBar3">{character.stats?.[2].base_stat}</div>
     </div>
    </div>
   </div>
   <div className="evolution-container">
    <h2>Evolution</h2>
    <div className="evolution-picture">
     <img src={character.sprites?.versions['generation-vi']['omegaruby-alphasapphire'].front_default} alt="" style={{width:"200px", heigth:"200px"}}/>
     <Player src='https://assets6.lottiefiles.com/packages/lf20_omx2w9em.json' 
     className='player'
     loop
     autoplay
     speed={1}
     style={{width:"150px", eight:"150px"}}/>
     <img src={character.sprites?.other['dream_world']?.front_default} alt="" style={{width:"100px", heigth:"100px"}}/>
    </div>
   </div>
  
 
 </div>
  
  
 );
};

export default PokemonDetail;