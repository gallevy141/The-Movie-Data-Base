import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

//MovieDetails component displays information about a specific movie
function MovieDetails() {
  // State to store movie details
  const [movie, setMovie] = useState({})
  
  const { id } = useParams()

  //useEffect is used to fetch the movie details
  useEffect(() => {
    const fetchData = async () => {
      //GET request to the TMDB API to get the movie details
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )

      //when reponse is received, update the movie state with the data
      setMovie(response.data)
    }

    fetchData()
  }, [id]) // Dependency array for useEffect. This means the effect will run again if id changes

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