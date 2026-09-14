import { useState } from "react"

function Scoreboard({score,bestScore}) {
    return <>
        <h2>Score: {score}</h2>
        <h2>Best score: {bestScore}</h2>
    </>
}

export {Scoreboard}