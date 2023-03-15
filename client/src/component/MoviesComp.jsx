import axios from 'axios'
import React, {useState, useEffect} from 'react'


function MoviesComp (props) {
  const [movies, setMovies] = useState([])
  const url = "/get-movies";

  useEffect(() => {
    axios.get(url).then((res) => {
   setMovies(res.data)
  })
},[])
  const handleDelete = async (id) => {
    try {
     await axios.delete("http://localhost:8000//delete-movies/"+ id)
     window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='movie-card'>
    <img src={props.movies.img} />
    <div className='flex'>
    <h6>{movies.name}</h6>
    <p className='left' >{movies.rating}</p>
    </div>
    <div className='flex'>
    <p>{movies.year}</p>
    <p className='left' >{movies.ind}</p>
    </div>
    <div className='flex'>
      <button >Update</button>
      <button onClick={() => handleDelete(movies.id)} >Delete</button>
    </div>
    
    </div>
    
  )
}

export default MoviesComp