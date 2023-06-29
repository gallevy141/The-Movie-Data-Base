import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )

      setMovies(response.data.results)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Movies</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Movies