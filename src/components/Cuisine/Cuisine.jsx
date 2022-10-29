import React, {useEffect, useState} from 'react';
//import styled from 'styled-components';
//import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import StyledCard from "./CardCuisine/CardCuisine";
import StyledGrid from "./GridCuisine/GridCuisine";
import axios from 'axios';
/*
function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`
        );
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
            getCuisine(params.type);
            console.log(params.type);
        }, [params.type]);
*/

/*-------*/
function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    useEffect(() => {
        async function getCuisine(name) {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`);

                //createRecipeList( response.data )
                console.log(response.data);
                //console.log(result.data);
                setCuisine(response.data.results);

            } catch (e) {
                console.error(e);
            }
        }

        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);

    /*------------*/

    return (
        <>
            <StyledGrid>
                {cuisine.map((item) => {
                    return (
                        <StyledCard key={item.id}>
                            <Link to={"/recipe/" + item.id}>
                                <img src={item.image} alt=""/>
                                <h4>{item.title}</h4>
                            </Link>
                        </StyledCard>
                    );
                })}
            </StyledGrid>
        </>
    );
}

/*
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
    border: 2px solid orangered;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
    font-weight: 500;
  }
`;
*/
export default Cuisine;

