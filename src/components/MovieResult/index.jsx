import MOVIE_PNG from '../Assets/movieeee.png'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const { REACT_APP_API_KEY } = process.env;


export const MovieResult = () => {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [search, setSearch] = useState([]);
    
    useEffect(() => {
        const apiResult = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=es-ES&query=${keyword}`
        axios.get(apiResult)
        .then(response => {
            const searchInfo = response.data.results;
            if (searchInfo.length === 0) {
                toast.error("Sorry, we cant found your movie.")
            }
            //console.log(searchInfo)
            setSearch(searchInfo);
        })
        .catch(error => {
            toast.error("Something went wrong, try later.")
        })
    }, [keyword])

    //console.log(search)

    return (
            <div className="row m-3">
                <h2 className='text-center'>Resultados para: <br /> {keyword}</h2>
            {
                search.map((movie, i) => {
                    return(
                        <div className="col-sm-3" key={i}>
                            <div className="card" style={{width: "18rem", marginTop:'1rem'}}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` || MOVIE_PNG} className="card-img-top" alt="movie poster"/>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{movie.title}</h5>
                                    <div className="d-flex justify-content-center">
                                        <Link to={`/details?movieID=${movie.id}`} className="btn btn-secondary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }    

        </div>

    )
}
