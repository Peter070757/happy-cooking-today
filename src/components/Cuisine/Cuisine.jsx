import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import StyledCard from "./CardCuisine/CardCuisine";
import StyledGrid from "./GridCuisine/GridCuisine";
import axios from 'axios';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    useEffect(() => {
        async function getCuisine(name) {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${name}`);
                
                setCuisine(response.data.results);

            } catch (e) {
                console.error(e);
            }
        }

        getCuisine(params.type);
      
    }, [params.type]);

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

export default Cuisine;

