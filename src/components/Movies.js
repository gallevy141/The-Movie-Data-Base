import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )

      setMovies(result.data.results)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Movies