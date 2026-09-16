import styles from "../styles/Header.module.css"

function Header() {
    return <header className={styles.header}>
        <h1>Pokémon Memory Game</h1>
        <p>Get points by clicking on a Pokémon but don't click on any more than once!</p>
    </header>
}
export {Header}