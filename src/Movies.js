import React from 'react'

const Movies = ({name,price}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
    </div>
  )
}

export default Movies
