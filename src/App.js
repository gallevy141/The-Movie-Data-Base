import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Movies from './components/Movies'
import TVShows from './components/TVShows'
import MovieDetails from './components/MovieDetails' // new
import TVShowDetails from './components/TVShowDetails' // new

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
          <Route path="/tvshows/:id">
            <TVShowDetails />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/tvshows">
            <TVShows />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  )
}

export default App