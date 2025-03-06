import { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'

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
                        {character.name}
                        <div>
                        <img src={character.image} style={{height: 100}}/>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}