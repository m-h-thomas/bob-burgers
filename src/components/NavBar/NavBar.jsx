import './NavBar.css'
import SearchBar from '../SearchBar/SearchBar'
import { Link, Route, Routes } from 'react-router-dom'

export default function NavBar () {
    return (
        <>
            <header className="navBar">
                <img src="images/bobs-burgers-logo.png" alt="Bob's Burgers Logo" style={{width: 250 }}/>
                
                <h1>Characters</h1>
                
                <h1>Episodes</h1>
                <SearchBar />
            </header>
        </>
    )
}