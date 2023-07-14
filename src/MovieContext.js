import React,{useState,createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [moviesList,setMoviesList] = useState([
        {
            name:'Harry Potter',
            price:'$20',
            id:12345
        },
        {
            name:'Game of Thrones',
            price:'$10',
            id:43532
        },
        {
            name:'Lakshay',
            price:'$24',
            id:98985
        }
    ])
    return (
        <MovieContext.Provider value={[moviesList,setMoviesList]}>
            {props.children}
        </MovieContext.Provider>
    )
}

