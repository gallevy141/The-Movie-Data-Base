import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function SearchResults() {
  const [results, setResults] = useState([])
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('query')

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`//replace process.env with actual tmdb api key
      )

      setResults(response.data.results)
    }

    fetchData()
  }, [query])

  return (
    <div>
      <h1>Search Results</h1>
      {results.map(result => (
        <div key={result.id}>{result.title || result.name}</div>
      ))}
    </div>
  )
}

export default SearchResults