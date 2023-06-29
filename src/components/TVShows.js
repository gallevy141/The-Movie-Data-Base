import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const TvShows = () => {
  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )

      setTvShows(result.data.results)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>TV Shows</h2>
      {tvShows.map((show) => (
        <div key={show.id}>
          <Link to={`/tvshows/${show.id}`}>
            <h3>{show.name}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TvShows