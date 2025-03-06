import React from 'react'
import './SearchBar.css'

export default function SearchBar () {
    return (
        <>
            <form id="search-btn"> 
                <input id='search-input' type="text" placeholder='Search'/> 
                <button  type='submit'>SEARCH</button>
            </form>
        </>
    )
}