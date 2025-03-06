import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";

export default function Episodes () {

    const [episodeList, setEpisodeList] = useState([])

    let episodeURL = 'https://bobsburgers-api.herokuapp.com/episodes/'

    useEffect(() => {
        fetch(episodeURL)
            .then(res => res.json())
            .then(data => setEpisodeList(data))
    }, [])

    return (
        <>
        
        <h1>Episodes List</h1>

        <ul className="episode-list">
            {episodeList.map((episode) => (
                <li key={episode.id}>
                    Season: {episode.season} Episode: {episode.episode}
                    <div>
                    {episode.name}
                    </div>
                </li>
            ))}
        </ul>

        </>   
    )
}