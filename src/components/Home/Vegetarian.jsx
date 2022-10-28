import React from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
//import styled from "styled-components";
import {useEffect, useState} from "react";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from "react-router-dom";
//import StyledParagraph from "./StyledHomePage/Paragraph/Paragraph";
//import StyledImage from "./StyledHomePage/Image/Image";
import StyledWrapper from "./Wrapper/Wrapper";
import StyledCard from "./Card/Card";
import StyledGradient from "./Gradient/Gradient";

import axios from "axios";

function Vegetarian() {
    const [vegetarian, setVegetarian] = useState([]);


    useEffect(() => {
        async function getVegetarian() {


            try {

                const check = localStorage.getItem('vegetarian');

                if (check) {
                    setVegetarian(JSON.parse(check));
                } else {

                    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`);
                    //const data = await api.json();

                    localStorage.setItem("vegetarian", JSON.stringify(response.data.recipes));

                    setVegetarian(response.data.recipes);
                    console.log(response.data.recipes);
                }
            } catch
                (e) {
                console.error(e);
                console.log(e.response);

            }
        }

        getVegetarian();
    }, []);


    return (
        <div>

            <StyledWrapper>
                <h3>Vegetarian Recipes</h3>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: true,
                        pagination: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {vegetarian.map((recipe) => {
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

export default Vegetarian;
