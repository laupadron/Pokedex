
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InputPokemon from './components/InputPokemon'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  

  return (
   <HashRouter>
    
       
    <div className="App">
     <Routes>
      <Route path="/" element={<InputPokemon/>}/>
     <Route element={<ProtectedRoutes/>}>
      <Route path='/pokedex' element={<Pokedex/>}/>
      <Route path='/pokedex/:id' element={<PokemonDetail/>}/>
     </Route>
     </Routes>
     
    </div>
    </HashRouter>
  )
}

export default App
