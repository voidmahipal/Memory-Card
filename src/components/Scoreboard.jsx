import { useState } from "react"
import styles from "../styles/Scoreboard.module.css";

function Scoreboard({score,bestScore}) {
    return <section className={styles.section}>
        <h2>Score: {score}</h2>
        <h2>Best score: {bestScore}</h2>
    </section>
}

export {Scoreboard}