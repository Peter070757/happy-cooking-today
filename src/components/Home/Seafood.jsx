import React from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {useEffect, useState} from "react";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from "react-router-dom";
import StyledWrapper from "./Wrapper/Wrapper";
import StyledCard from "./Card/Card";
import StyledGradient from "./Gradient/Gradient";
import axios from "axios";

function Seafood() {
    const [seafood, setSeafood] = useState([]);

    useEffect(() => {
        async function getSeafood() {

            try {

                const check = localStorage.getItem('seafood');

                if (check) {
                    setSeafood(JSON.parse(check));
                } else {

                    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=pescetarian`);

                    localStorage.setItem("seafood", JSON.stringify(response.data.recipes));

                    setSeafood(response.data.recipes);
                    console.log(response.data.recipes);
                }
            } catch (e) {
                console.error(e);             
            }
        }

        getSeafood();
    }, []);

    return (
        <div>
            <StyledWrapper>
                <h3>Fish & Seafood Recipes</h3>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: true,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {seafood.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <StyledCard>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title}/>
                                        <StyledGradient/>
                                    </Link>
                                </StyledCard>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </StyledWrapper>
        </div>
    );
}

export default Seafood;
