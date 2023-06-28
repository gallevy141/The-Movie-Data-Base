import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function MainLayout({ children }) {
  const [search, setSearch] = useState('')
  const history = useHistory()

  const handleSearch = (e) => {
    e.preventDefault()
    history.push(`/search?query=${search}`)
  }

  return (
    <div>
      <nav>
        <Link to="/movies">Movies</Link>
        <Link to="/tvshows">TV Shows</Link>
      </nav>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout