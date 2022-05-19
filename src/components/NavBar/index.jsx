import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../Assets/movie.png';
import './index.css'
import { ClassNames } from '@emotion/react';
import SearchBar from '../SearchBar';

export const NavBar = () => {
    return (
        <Navbar bg='myColor' variant='dark' sticky='top' expand='sm'>

            <Navbar.Brand>
                <img src={Logo} alt="logo" width={40} height={40} style={{marginLeft:'12px', marginRight:'15px'}}/>
                The Movie App
            </Navbar.Brand>

            <Navbar.Toggle style={{marginRight:'15px'}}/>

            <Navbar.Collapse>

                <Nav style={{textAlign:'center'}}>
                    <Nav.Link href='/home'>Home</Nav.Link>
                    <Nav.Link href='/about'>About Us</Nav.Link>
                    <NavDropdown title='Contact'>
                        <div className='text-center'>
                            <NavDropdown.Item href='https://www.instagram.com/' target='_blank'>Instagram</NavDropdown.Item>
                            <NavDropdown.Item href='https://www.facebook.com/' target='_blank'>Facebook</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='https://www.gmail.com/' target='_blank'>Mail</NavDropdown.Item>
                        </div>   
                    </NavDropdown>
                </Nav>

                <SearchBar />

            </Navbar.Collapse>

        </Navbar>
    )
}
