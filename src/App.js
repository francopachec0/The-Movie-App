import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import { Details } from "./components/Details";
import { MovieResult } from "./components/MovieResult";
import './App.css'

function App() {

  const handleAddorDeleteFavourite = () => {
    console.log('ok')
  }

    return (
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route exact path = {'/'} element = {<Login />}/>
              <Route path = {'/home'} element = {<Home handleAddorDeleteFavourite={handleAddorDeleteFavourite}/>}/>
              <Route path = {'/details'} element = {<Details />}/>
              <Route path = {'/results'} element = {<MovieResult />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
    );
  };

export default App
