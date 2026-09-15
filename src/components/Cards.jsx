function handleClick(pokemonObj,setScore,setBestScore,score,bestScore,resetBoard,shuffleBoard) {
    
    pokemonObj.clickCount = pokemonObj.clickCount+1;
    if(pokemonObj.clickCount>1) {
        alert(`You Lost!! You clicked on ${pokemonObj.name} twice!!`);
        setScore(0);
        resetBoard();
        return;
    }
    if((score+1)===12) {
        alert("You won!!");
        setScore(0);
        setBestScore(12);
        resetBoard();
        return;
    } 
    setScore(score+1);
    setBestScore(Math.max(score+1,bestScore));
    shuffleBoard();
}

function Card({pokemonObj,setScore,setBestScore,score,bestScore,resetBoard,shuffleBoard}) {

    return (<div onClick={()=>handleClick(pokemonObj,setScore,setBestScore,score,bestScore,resetBoard,shuffleBoard)}>
        <img src={pokemonObj.imgUrl} alt={pokemonObj.name} />
        <h3>{pokemonObj.name}</h3>
    </div>);
}

export {Card};