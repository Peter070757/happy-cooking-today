import React from 'react';
import Popular from "../components/Home/Popular";
import Seafood from "../components/Home/Seafood";
import Vegetarian from "../components/Home/Vegetarian";

function Home() {
    return (
        <div>
            <Popular/>
            <Seafood/>
            <Vegetarian/>
        </div>
    );
}

export default Home;
