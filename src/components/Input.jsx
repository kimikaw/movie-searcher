import React from 'react'
import TextField from '@material-ui/core/TextField'

const Input = ({ value, onChange }) => {
  return (
    <TextField
      label="Search for a movie, tv show, person..."
      fullWidth
      placeholder="Search for a movie, tv show, person..."
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
