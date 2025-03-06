import './NavBar.css'
import SearchBar from '../SearchBar/SearchBar'
import { Link, Route, Routes } from 'react-router-dom'

export default function NavBar () {
    return (
        <>
            <header className="navBar">
                <Link to='/'>
                <img src="images/bobs-burgers-logo.png" alt="Bob's Burgers Logo" style={{width: 250 }}/>
                </Link>
                
                
                <Link to='/characters'>
                <h1>Characters</h1>
                </Link>

                <Link to="/episodes">
                <h1>Episodes</h1>
                </Link>

                <SearchBar />
                
            </header>
        </>
    )
}