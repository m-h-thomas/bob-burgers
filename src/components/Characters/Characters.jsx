import { useState, useEffect } from 'react'
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
                        <div className='character-image'>
                        <img src={character.image} style={{widows: 50, height: 100}}/>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}