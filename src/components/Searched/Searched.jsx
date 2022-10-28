import React from 'react';
import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
//import styled from "styled-components";
import StyledGrid from "./GridSearched/GridSearched";
import StyledCard from "./CardSearched/CardSearched";
import axios from "axios";

/*
function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);
*/

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    useEffect(() => {

        async function getSearched(name) {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${name}`);
                //const recipes = await data.json();
                setSearchedRecipes(response.data.results);

            } catch (e) {
                console.error(e);
            }
        }

        getSearched(params.search);
    }, [params.search]);

    return <StyledGrid>
        {searchedRecipes.map((item) => {
            return (
                <StyledCard key={item.id}>
                    <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt=""/>
                        <h4>{item.title}</h4>
                    </Link>
                </StyledCard>
            );
        })}
    </StyledGrid>;
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
export default Searched;
