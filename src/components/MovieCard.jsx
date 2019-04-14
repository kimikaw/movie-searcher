import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { CardContent } from '@material-ui/core'

const styles = {
  card: {
    maxWidth: 250,
    marginTop: 15,
  },
  media: {
    height: 400,
    width: '100%',
  },
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
}

const MovieCard = ({ movie, classes }) => (
  <Card className={classes.card}>
    <CardActionArea className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title="Poster"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          color="textPrimary"
        >
          {movie.title}
        </Typography>
        <Typography component="p" color="textSecondary">
          {movie.overview}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)

export default withStyles(styles)(MovieCard)
