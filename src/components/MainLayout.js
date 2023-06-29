import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"

const MainLayout = ({ children }) => {
  const navigate = useNavigate()

  const onMoviesClick = () => {
    navigate("/movies")
  }

  const onTvShowsClick = () => {
    navigate("/tvshows")
  }

  return (
    <div>
      <header>
        <nav>
          <Button onClick={onMoviesClick}>Movies</Button>
          <Button onClick={onTvShowsClick}>TV Shows</Button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout