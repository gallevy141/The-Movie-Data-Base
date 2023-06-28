import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout({ children }) {
    return (
        <div>
            <nav>
                <Link to="/movies">Movies</Link>
                <Link to="/tvshows">TV Shows</Link>
            </nav>
            <div>
                <input type="search" placeholder="Search..." />
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout