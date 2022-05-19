import React from 'react'
import { Link } from 'react-router-dom';
import '../NavBar/index.css';

export const Footer = () => {
    return (
        <div>
            <footer className='text-white py-4 bg-myColor position-absolute w-100'>
                <div className="container">
                    <nav className="row">
                        
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bold text-center mb-2'>
                                    <div className='movie_app'>
                                        <Link to='/home' className='col-12 d-flex align-items-center justify-content-center text-center text-white'>🎬 The Movie App 🎬</Link>
                                    </div> 
                                </li>
                                <li className='text-center'>
                                    Here you can find and read about your favourites movies!
                                </li>
                            </ul>
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bold text-center mb-2 font-size-50'>About Us</li>
                                <li className='text-center'>
                                    We try to develop the best experience for our friends!
                                </li>
                            </ul>
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bold text-center mb-2'>Follow Us</li>
                                <li className='d-flex justify-content-between'>
                                    <i className="bi bi-facebook"></i>
                                    <i className="bi bi-instagram"></i>
                                    <i className="bi bi-youtube"></i>
                                    <i className="bi bi-tiktok"></i>
                                </li>
                            </ul>
                            <ul className='col-12 col-md-3 list-unstyled'>
                                <li className='font-weight-bold text-center mb-2'>THANKS YOU!</li>
                                <li className='d-flex justify-content-center'>
                                    <i className="bi bi-heart-fill"></i>
                                </li>
                            </ul>

                            <div className="container">
                                <p className='text-center mb-0 mt-2'>
                                    Single Page Application developed by Franco Pacheco
                                </p>
                            </div>

                    </nav>
                    
                </div>
            </footer>
        </div>
    )
}
