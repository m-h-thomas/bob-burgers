import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetails () {

    const { id } = useParams(); // Get character ID from URL
    const [character, setCharacter] = useState(null);
  
    useEffect(() => {
      fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`)
        .then(res => res.json())
        .then(data => setCharacter(data));
    }, [id]);
  
    if (!character) return <p>Loading...</p>;
  
    return (
      <div>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} style={{ width: 200, height: 300 }} />
        <p>Occupation: {character.occupation}</p>
        <p>First Episode Appearance: {character.firstEpisode}</p>
      </div>
    );
  }
  