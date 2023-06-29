import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Movies from './components/Movies'
import TVShows from './components/TVShows'
import MovieDetails from './components/MovieDetails'
import TVShowDetails from './components/TVShowDetails'
import SearchResults from './components/SearchResults'
import './App.css'

const App = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/tvshows/:id" element={<TVShowDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </MainLayout>
  </Router>
)

export default App