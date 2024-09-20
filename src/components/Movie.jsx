import React from 'react'

const Movie = ({movie}) => {
  return (
    <div className='movie'>
        <h2>{movie.movie}</h2>
        <p>{movie.rating}</p>
        <img src={movie.image} alt={movie.movie} />
    </div>
  )
}

export default Movie