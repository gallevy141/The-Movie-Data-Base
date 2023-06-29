import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'

function SearchResults() {
  const [results, setResults] = useState([])
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('query')

  useEffect(() => {
    const fetchData = async () => {
      const responseMovies = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
      )
      const responseShows = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
      )

      setResults([...responseMovies.data.results, ...responseShows.data.results])
    }

    fetchData()
  }, [query])

  return (
    <div>
      <h1>Search Results</h1>
      {results.map(result => (
        <div key={result.id}>
          <Link to={`/${result.media_type}s/${result.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title || result.name} />
            <p>{result.title || result.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SearchResults