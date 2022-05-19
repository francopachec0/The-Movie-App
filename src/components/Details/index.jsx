import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const { REACT_APP_API_KEY } = process.env;

export const Details = () => {

    let token = sessionStorage.getItem('token');
    const navigate = useNavigate();
    const [movieDetail, setMovieDetail] = useState(null);
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    useEffect(() => {
        const apiDetail = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${REACT_APP_API_KEY}&language=es-ES`
        axios.get(apiDetail)
        .then(response => {
            const movieInfo = response.data;
            setMovieDetail(movieInfo);
        })
        .catch(error => {
            toast.error("Something went wrong, try later.")
        })
    }, [setMovieDetail])

    return (
        <div>
            {!token && navigate('/')}

            {
                movieDetail &&
                <>
                    <h1 className='text-center mt-2'>{movieDetail.title}</h1>
                    <div className="row w-100">
                        <div className="col-sm-4">
                            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="movie_poster" className='m-3 w-100'/>
                        </div>
                        <div className="col-8 text-center">
                            <h3 className='mt-4 text-center'>Fecha de Estréno {movieDetail.release_date}</h3>
                            <h5 className='text-center'>{movieDetail.genres.map(g => g.name + " ")}</h5>
                            <h4 className='mt-4'>{movieDetail.overview}</h4>
                            <h5 className='mt-4 text-center'>Calificación {movieDetail.vote_average}</h5>
                            <div className="d-flex justify-content-center">
                                <Link to={'/home'} className="btn btn-secondary mt-3 mb-2">Volver</Link>
                            </div>  
                        </div>
                    </div>
                </>
            }   

        </div>
    )
}
