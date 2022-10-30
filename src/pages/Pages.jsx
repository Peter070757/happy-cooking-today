<<<<<<< HEAD
import React, {useContext} from 'react';
import Home from './Home';
import Cuisine from "../components/Cuisine/Cuisine";
import Searched from "../components/Searched/Searched";
import Recipe from "../components/Recipe/Recipe";
import About from "../components/About/About"
import Login from "../components/Login/Login"
import Register from "../components/Register/RegisterPage"
import Profile from "../components/Profile/ProfilePage";
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function Pages() {

    const {isAuth} = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/cuisine/:type" element={<Cuisine/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/recipe/:name" element={<Recipe/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Profile" element={isAuth ? (<Profile/>) : (<navigate to="/"/>)}/>
        </Routes>
    );
}

export default Pages;
=======
import React, {useContext} from 'react';
import Home from './Home';
import Cuisine from "../components/Cuisine/Cuisine";
import Searched from "../components/Searched/Searched";
import Recipe from "../components/Recipe/Recipe";
import About from "../components/About/About"
import Login from "../components/Login/Login"
import Register from "../components/Register/RegisterPage"
import Profile from "../components/Profile/ProfilePage";
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

function Pages() {
    
    const {isAuth} = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/cuisine/:type" element={<Cuisine/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/recipe/:name" element={<Recipe/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Profile" element={isAuth ? (<Profile/>) : (<navigate to="/"/>)}/>
        </Routes>
    );
}

export default Pages;
>>>>>>> 1e00e8bc4861d6f3a31b335d666cdfaac22bd7fb
