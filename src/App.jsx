import { useState,useEffect } from 'react'
import './App.css'

function extractUsefulInfo(obj) {
  return {
    id : obj.id,
    name : obj.name,
    imgUrl : obj.sprites.front_default,
    clickCount : 0,
  };
}
function App() {

  const pokemonNameList = ["pikachu","charizard","bulbasaur","squirtle","gengar","eevee","snorlax","lucario","greninja","dragonite","mewtwo","umbreon"];

  let pokemonList=[];
  useEffect(()=>{
    for(let name of pokemonNameList) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response)=>{
        return response.json();
      })
      .then((response)=>{
        const data = extractUsefulInfo(response);
        pokemonList.push(data);
      }).catch(()=>{
        alert("Failed to Load!");
      })
    }
    console.log(pokemonList);
  },[]);
}

export default App
