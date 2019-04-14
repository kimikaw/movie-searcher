import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import axios from './api'

import Input from './components/Input'
import MovieCard from './components/MovieCard'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}

class App extends Component {
  state = {
    value: '',
    movies: [],
  }

  componentDidMount() {
    axios('movie/top_rated')
      .then(res => this.setState({ movies: res.data.results }))
      .catch(error => console.log(error))
  }

  handleChange = e => {
    const value = e.target.value
    this.setState({ value }, () => {
      axios('search/movie', { params: { query: value } })
        .then(res => this.setState({ movies: res.data.results }))
        .catch(err => console.log(err))
    })
  }

  render() {
    const { classes } = this.props
    const { value, movies } = this.state

    return (
      <div>
        <Input value={value} onChange={this.handleChange} />
        <div className={classes.container}>
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
