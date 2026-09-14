import { useEffect, useState } from "react";
import { Card } from "./Cards";

const pokemonNameList = ["pikachu","charizard","bulbasaur","squirtle","gengar","eevee","snorlax","lucario","greninja","dragonite","mewtwo","umbreon"];

function extractUsefulInfo(obj) {
  return {
    id : obj.id,
    name : obj.name,
    imgUrl : obj.sprites.front_default,
    clickCount : 0,
  };
}

function Gameboard({setScore,setBestScore,score,bestScore}) {
    
    const [pokemonList,setPokenmonList] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{

        const promises = pokemonNameList.map((name)=>{
            return  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                    .then((response)=>{
                        if(!response.ok) throw new Error("Unable to Load data!");
                        return response.json();
                    })
                    .then((responseObj)=>{
                        return extractUsefulInfo(responseObj);
                    });
        })
        Promise.all(promises).then((pokemonObjList)=>{
            setPokenmonList(pokemonObjList);
            setIsLoading(false);
        }).catch(()=>alert("Failed to load"));
    },[])

    if(isLoading) return <p>Loading...</p>
    return <>
        <section>
            {pokemonList.map((pokemonInfo)=>{
                return <Card name={pokemonInfo.name} id={pokemonInfo.id} imgUrl={pokemonInfo.imgUrl} clickCount={pokemonInfo.clickCount} setScore={setScore} setBestScore={setBestScore} score={score} bestScore={bestScore} key={pokemonInfo.id}></Card>
            })}
        </section>
    </>
}

export {Gameboard};