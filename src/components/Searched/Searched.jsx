import React from 'react';
import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import StyledGrid from "./GridSearched/GridSearched";
import StyledCard from "./CardSearched/CardSearched";
import axios from "axios";

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

export default Searched;
