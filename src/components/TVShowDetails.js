import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function TVShowDetails() {
  const [show, setShow] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`//replace process.env with actual tmdb api key
      )

      setShow(response.data)
    }

    fetchData()
  }, [id])

  return (
    <div>
      <Link to="/tvshows">Back</Link>
      <h1>{show.name}</h1>
      <p>{show.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
    </div>
  )
}

export default TVShowDetails