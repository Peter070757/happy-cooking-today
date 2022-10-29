import React from 'react';
import {useEffect, useState} from "react";
//import styled from "styled-components"
import {useParams} from "react-router-dom";
import StyledDetailWrapper from "./DetailWrapper/DetailWrapperRecipe";
import StyledInfo from "./Info/InfoRecipe";
import StyledButton from "./Button/ButtonRecipe";
import axios from 'axios';

/*----
function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

-------------------*/

/* --------- Axios function   -------*/

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    useEffect(() => {
        async function fetchDetails() {

            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                //const detailData = await data.json();
                setDetails(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchDetails();
    }, [params.name]);
    /*------------*/
    return (
        <>
            <StyledDetailWrapper>
                <div>
                    <h2>{details.title}</h2>
                    <img src={details.image} alt=""/>
                </div>
                <StyledInfo>
                    <StyledButton
                        className={activeTab === "instructions" ? "active" : ""}
                        onClick={() => setActiveTab("instructions")}
                    >
                        Instructions
                    </StyledButton>
                    <StyledButton
                        className={activeTab === "ingredients" ? "active" : ""}
                        onClick={() => setActiveTab("ingredients")}
                    >
                        Ingredients
                    </StyledButton>
                    {activeTab === "instructions" && (
                        <div>
                            <h3 dangerouslySetInnerHTML={{__html: details.summary}}/>
                            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}/>
                        </div>
                    )}
                    {activeTab === "ingredients" && (
                        <ul>
                            {details.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    )}
                    ;
                </StyledInfo>
            </StyledDetailWrapper>
        </>
    );
}

/*
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    cursor: default;
  }

  img {
    border: 2px solid orangered;
    border-radius: 0.7rem;
    padding: 0;
    background-color: black;
  }

  h2 {
    margin-bottom: 2rem;
    color: lightgray;
  }

  li {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 400;
    color: lightgray;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  color: #313131;
  //background: white;
  background: linear-gradient(35deg, #f3ecec, #fadbd0);
  border: 1px solid orangered;
  border-radius: 0.5rem;
  margin-right: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 7rem;
`;
*/

export default Recipe;
