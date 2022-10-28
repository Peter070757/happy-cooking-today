import React from 'react';
import {useEffect, useState} from "react";
//import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from "react-router-dom";
//import StyledParagraph from "./Paragraph/Paragraph";
//import StyledImage from "./Image/Image";
import StyledWrapper from "./Wrapper/Wrapper";
import StyledCard from "./Card/Card";
import StyledGradient from "./Gradient/Gradient";
import axios from 'axios';

function Popular() {
    const [popular, setPopular] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getPopular() {
            setError('');

            try {

                const check = localStorage.getItem('popular');

                if (check) {
                    setPopular(JSON.parse(check));
                } else {

                    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
                    localStorage.setItem("popular", JSON.stringify(response.data.recipes));

                    setPopular(response.data.recipes);
                    console.log(response.data.recipes);
                }
            } catch (e) {
                console.error(e);
                console.log(e.response);
                setError(e.response.data.status);
            }
        }

                getPopular();
    }, []);


    return (
        <div>
            {error && <p>Something went wrong, statuscode {error}</p>}
            <StyledWrapper>
                <h3>Easy Popular Recipes</h3>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: true,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {popular.map((recipe) => {
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

export default Popular;
