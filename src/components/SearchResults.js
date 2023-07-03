import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'


function SearchResults() {
  // State to store the search results
  const [results, setResults] = useState([])
  
  //`useLocation` access the query parameter from the current URL
  const location = useLocation()
  
  //create a URLSearchParams object to parse the query parameters
  const searchParams = new URLSearchParams(location.search)
  
  //get the 'query' parameter from the searchParams object
  const query = searchParams.get('query')

  //useEffect used to fetch the search results
  useEffect(() => {
    const fetchData = async () => {
      //GET request to the TMDB API to get the movie search results
      const responseMovies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
      )
      
      //GET request to the TMDB API to get the TV show search results
      const responseShows = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
      )

      //when both responses are received, update the results state with the combined data
      setResults([...responseMovies.data.results, ...responseShows.data.results])
    }

    fetchData()
  }, [query]) //dependency array for useEffect. This means the effect will run again if query changes

  //object to map the media_type field to a path
  const mediaTypeToPath = {
    movie: 'movies',
    tv: 'tvshows',
  }

  return (
    <div>
      <h1>Search Results</h1>
      {results.map(result => (
        <div key={result.id}>
          <Link to={`/${mediaTypeToPath[result.media_type]}/${result.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title || result.name} />
            <p>{result.title || result.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SearchResults