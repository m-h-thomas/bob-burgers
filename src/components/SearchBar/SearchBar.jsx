import React from 'react'
import './SearchBar.css'

export default function SearchBar () {
    return (
        <>
            <form className="search-btn"> 
                <input type="text" placeholder='Search'/> 
                <button  type='submit'>SEARCH</button>
            </form>
        </>
    )
}