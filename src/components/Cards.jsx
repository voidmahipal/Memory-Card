function handleClick(clickCount,setScore,setBestScore,score,bestScore) {
    clickCount=clickCount+1;
    if(clickCount>1) {
        alert("Game Over!!");
        setBestScore(max(score),bestScore);
        setScore(0);
        return;
    }
    setScore(score+1);
    setBestScore(Math.max(score),bestScore);
}

function Card({name,id,imgUrl,clickCount,setScore,setBestScore,score,bestScore}) {

    return (<div onClick={()=>handleClick(clickCount,setScore,setBestScore,score,bestScore)}>
        <img src={imgUrl} alt={name} />
        <h3>{name}</h3>
    </div>);
}

export {Card};