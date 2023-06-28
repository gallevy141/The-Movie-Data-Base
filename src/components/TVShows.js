import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TVShows() {
  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}`//replace process.env section with actual tmdb api key
      )

      setTvShows(response.data.results)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>TV Shows</h1>
      {tvShows.map(show => (
        <div key={show.id}>{show.name}</div>
      ))}
    </div>
  )
}

export default TVShows