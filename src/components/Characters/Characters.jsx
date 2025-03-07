import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Characters.css'

export default function Characters () {
    
    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        fetch('https://bobsburgers-api.herokuapp.com/characters?sortBy=name&OrderBy=asc')
            .then(res => res.json())
            .then(data => setCharacters(data))
    }, [])



    return (
        <>
            <h1>Characters List</h1>
            
            <ul className="character-list">
                {characters.map(character => (
                    <li key={character.id}>
                        <div className='character-name'>
                        {character.name}
                        </div>
                        <br></br>
                        <div className='character-image'>
                        <Link to={`/characters/${character.id}`}> {/* Link to character detail page */}
                        <img src={character.image} style={{widows: 50, height: 100}}/>
                        </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}