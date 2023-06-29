import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function MovieDetails() {
  const [movie, setMovie] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )

      setMovie(response.data)
    }

    fetchData()
  }, [id])

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>Rating: {movie.vote_average}</p>
      <Link to="/movies">Back</Link>
    </div>
  )
}

export default MovieDetails