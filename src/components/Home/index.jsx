import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, Link } from "react-router-dom";
const { REACT_APP_API_KEY } = process.env;

export const Home = (props) => {

    console.log(props)

    const navigate = useNavigate();

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if(token === null) {
            navigate('/');
        }
    })

    useEffect(() => {
        const apiInfo = `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&language=es-ES&page=1`
        axios.get(apiInfo)
        .then(response => {
            const moviesInfo = response.data;
            setMoviesList(moviesInfo.results);
        })
        .catch(error => {
            toast.error("Something went wrong, try later.")
        })
    }, [setMoviesList])

    return (
        <div className="row m-3">
            
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            {
                moviesList.map((movie, i) => {
                    return(
                        <div className="col-sm-3" key={i}>
                            <div className="card" style={{width: "18rem", marginTop:'1rem'}}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="movie poster"/>
                                <button className="favourite-btn">🤍</button>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{movie.title}</h5>
                                    <p className="card-text text-center">{movie.overview.substring(0, 120)}...</p>
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
    );
};
