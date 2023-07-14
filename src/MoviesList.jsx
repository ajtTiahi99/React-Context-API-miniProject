import React,{useContext} from 'react'
import Movies from './Movies.js'
import { MovieContext } from './MovieContext.js'

const MoviesList = () => {
    const [movies,setMovies] = useContext(MovieContext)
    return (
        <>
            {movies.map((movie,key)=>(
                <Movies name={movie.name} price={movie.price} key={movie.id}/>
            ))}
        </>
    )
}

export default MoviesList
