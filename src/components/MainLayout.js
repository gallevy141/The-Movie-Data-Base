import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"

const MainLayout = ({ children }) => {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const onMoviesClick = () => {
    navigate("/movies")
  }

  const onTvShowsClick = () => {
    navigate("/tvshows")
  }

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