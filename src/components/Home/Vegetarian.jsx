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

/*
function Vegetarian() {

    const [vegetarian, setVegetarian] = useState([]);

    useEffect(() => {
        getVegetarian();
    }, []);

    const getVegetarian = async () => {

        const check = localStorage.getItem("vegetarian");

        if (check) {
            setVegetarian(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
            );
            const data = await api.json();

            localStorage.setItem("vegetarian", JSON.stringify(data.recipes));
            setVegetarian(data.recipes)
            console.log(data.recipes)
        }
    };
/*
    /*----------*/
function Vegetarian() {
    const [vegetarian, setVegetarian] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getVegetarian() {
            setError('');

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
                setError(e.response.data.status);
            }
        }

        /* End code with Axios with local storage */


        getVegetarian();
    }, []);


    return (
        <div>
            {error && <p>Something went wrong, statuscode {error}</p>}
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

/*
const Wrapper = styled.div`
  margin: 2rem 0;
`;

const Card = styled.div`
  min-height: 18rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    border: 2px solid orangered;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

*/

export default Vegetarian;
