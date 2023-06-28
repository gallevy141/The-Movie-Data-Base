import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`//replace process.env section with actual tmdb api key
      )

      setMovies(response.data.results)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Movies</h1>
      {movies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  )
}

export default Movies