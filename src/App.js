import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import { Details } from "./components/Details";

function App() {
    return (
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route exact path = {'/'} element = {<Login />}/>
              <Route path = {'/home'} element = {<Home />}/>
              <Route path = {'/details'} element = {<Details />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
    );
  };

export default App
