<<<<<<< HEAD
import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StyledDetailWrapper from "./DetailWrapper/DetailWrapperRecipe";
import StyledInfo from "./Info/InfoRecipe";
import StyledButton from "./Button/ButtonRecipe";
import axios from 'axios';

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    useEffect(() => {
        async function fetchDetails() {

            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                setDetails(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchDetails();
    }, [params.name]);

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

export default Recipe;
=======
import React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import StyledDetailWrapper from "./DetailWrapper/DetailWrapperRecipe";
import StyledInfo from "./Info/InfoRecipe";
import StyledButton from "./Button/ButtonRecipe";
import axios from 'axios';

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    useEffect(() => {
        async function fetchDetails() {

            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
                setDetails(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchDetails();
    }, [params.name]);

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

export default Recipe;
>>>>>>> 1e00e8bc4861d6f3a31b335d666cdfaac22bd7fb
