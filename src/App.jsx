import React, { Component } from 'react'

import axios from './api'

import Input from './components/Input'

class App extends Component {
  state = {
    value: '',
    movies: [],
  }

  componentDidMount() {
    axios
      .get('movie/top_rated')
      .then(res => this.setState({ movies: res.data.results }))
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { value, movies } = this.state

    return (
      <div>
        <Input value={value} onChange={this.handleChange} />
        {movies.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    )
  }
}

export default App
