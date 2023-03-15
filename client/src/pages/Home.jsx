import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesComp from '../component/MoviesComp';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const url = 'http://localhost:8000/get-movies';
  const deleteUrl = "http://localhost:8000/delete-movies/";
  const updateUrl = "http://localhost:8000/update-movies/"


  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
     await axios.delete(deleteUrl+ id)
     window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='headin'>
        <h1>My Favourite Movies</h1>
      </div>
      <div className='movies-div'>
        {movies.map((movie) => (
          <div className='movie-card' key={movie.id}>
            <img src={movie.img} />
            <div className='flex'>
              <h6>{movie.name}</h6>
              <p className='left'>{movie.rating}</p>
            </div>
            <div className='flex'>
              <p>{movie.year}</p>
              <p className='left'>{movie.ind}</p>
            </div>
            <div className='flex'>
              <button> <Link to={`/update-movies/${movie.id}`} > Update </Link></button>
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
