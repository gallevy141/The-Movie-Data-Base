import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TVShows() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )

      setShows(response.data.results)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>TV Shows</h1>
      {shows.map(show => (
        <div key={show.id}>
          <Link to={`/tvshows/${show.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
            <p>{show.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TVShows