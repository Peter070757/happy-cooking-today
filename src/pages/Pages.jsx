//import React from 'react';

import Home from './Home';
import Cuisine from "../components/Cuisine/Cuisine";
import Searched from "../components/Searched/Searched";
import Recipe from "../components/Recipe/Recipe";


//import About from "./About";
import {Route, Routes} from "react-router-dom";




function Pages() {


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
                      <Route path="/cuisine/:type" element={<Cuisine/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/recipe/:name" element={<Recipe/>}/>

        </Routes>
    );
}

export default Pages;
