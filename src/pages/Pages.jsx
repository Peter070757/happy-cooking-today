//import React from 'react';

import Home from './Home';

//import About from "./About";
import {Route, Routes} from "react-router-dom";




function Pages() {


    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

        </Routes>
    );
}

export default Pages;
