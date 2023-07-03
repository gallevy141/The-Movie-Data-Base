import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function TVShowDetails() {
  // State to store the TV show details
  const [show, setShow] = useState({})
  
  //`useParams` to get the id parameter from the URL
  const { id } = useParams()

  //useEffect used to fetch the TV show details 
  useEffect(() => {
    const fetchData = async () => {
      //GET request to the TMDB API to get the TV show details
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      )

      //when response is received, update the show state with the data
      setShow(response.data)
    }

    fetchData()
  }, [id]) //dependency array for useEffect. This means the effect will run again if id changes

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} />
      <p>Rating: {show.vote_average}</p>
      <Link to="/tvshows">Back</Link>
    </div>
  )
}

export default TVShowDetails