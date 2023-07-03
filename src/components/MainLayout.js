import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"

//contains the common header for all pages, and render the specific content using {children}
const MainLayout = ({ children }) => {
  //`useNavigate` hook from `react-router-dom` to get the navigation function
  const navigate = useNavigate()
  
  const [query, setQuery] = useState("")

  //function to handle click event on the Movies button. It navigates to the Movies page
  const onMoviesClick = () => {
    navigate("/movies")
  }

  //function to handle click event on the TV Shows button. It navigates to the TV Shows page
  const onTvShowsClick = () => {
    navigate("/tvshows")
  }

  //function to handle search form submission. Navigates to the Search page with the query
  const onSearch = (e) => {
    e.preventDefault()
    navigate(`/search?query=${query}`)
  }

  return (
    <div>
      <header>
        <nav>
          <Button onClick={onMoviesClick}>Movies</Button>
          <Button onClick={onTvShowsClick}>TV Shows</Button>
          <form onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout