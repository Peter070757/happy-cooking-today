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

/*
function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    /* ----------------------------- Code with local storage need for testing app: ---------------------------------------

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
            );
            const data = await api.json();

            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes)
            console.log(data.recipes)
        }
    };
*/
/* ------------------------------------------------------------------------------------------------------------------ */

/* Start code without local storage: */
/*
    const getPopular = async () => {

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json();
        setPopular(data.recipes)
        console.log(data.recipes)
    };
*/

/* End code without local storage */

/* Start code with Axios without local storage:

function Popular() {
    const [popular, setPopular] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getPopular() {
            setError('');

            try {

                const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
                //const data = await api.json();
                setPopular(response.data.recipes);
                console.log(response.data);
            } catch (e) {
                console.error(e);
                console.log(e.response);
                setError(e.response.data.status);
            }
        }


        getPopular();
    }, []);

    End code with Axios without local storage */

/* Start code with Axios with local storage: */

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
                    //const data = await api.json();
                    /* Met headers
                                        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`, {
                                            //const data = await api.json();
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        });
                    */

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

        //   useEffect(() => {
        getPopular();
    }, []);

    /* End code with Axios with local storage */

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

export default Popular;
