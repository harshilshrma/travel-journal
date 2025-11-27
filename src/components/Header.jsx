import './Header.css'
import globe from '../assets/globe.png'

export default function Header() {
    return (
        <header>
            <img id="logo" src={globe} alt="Globe icon" />
            <h1 id="title">my travel journal.</h1>
        </header>
    )
}