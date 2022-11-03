import React from 'react';
import StyledCard from "./CardAbout/CardAbout";

//import {Link} from "react-router-dom";

function About() {
    return (
        <>
            <StyledCard>
                <h1>A short guide on how to use this application</h1>
            </StyledCard>
            <StyledCard>
                <h4>Easy Popular Recipes, Fish & Seafood Recipes and Vegetarian Recipes</h4>
            </StyledCard>
            <StyledCard>
                <p>If you search for a Easy Popular Recipe then click on the Home button above. Four recipes are
                    displayed. You can choose dishes from twelve recipes. By clicking on the scroll button, the
                    following four recipes are displayed, up to a maximum of twelve. You can also scroll with the mouse
                    pointer over the recipe carousel. If a choice has been made, you can click on the photo to view the
                    preparation
                    method and associated ingredients. The same applies also for a Fish and Seafood dish or a Vegetarian
                    dish.
                </p>
            </StyledCard>
            <StyledCard>
                <h4>Recipes from different cuisines</h4>
            </StyledCard>
            <StyledCard>
                <p>
                    If you want to make something from a foreign kitchen, click on one of the six buttons above. You can
                    choose dishes from Spain, France, Italy, India, Thailand or China. Twelve recipes are then
                    displayed. You can make a choice from this. If a choice has been made, you can click on the photo to
                    view the preparation method and associated ingredients.
                </p>
            </StyledCard>
            <StyledCard>
                <h4>Search for your own recipe</h4>
            </StyledCard>
            <StyledCard>
                <p>
                    In the search bar above you can enter your own meal. Then twelve recipes are shown from which a
                    choice
                    can be made. You can also enter some ingredients (separated by a comma) that you have in stock.
                    If a choice has been made, you can click on the photo to view the preparation method and associated
                    ingredients.
                </p>
            </StyledCard>
            <StyledCard>
                <h4>Login or register</h4>
            </StyledCard>
            <StyledCard>
                <p>
                    By registering yourself you will get your own profile page with all your details. Click on the Login
                    button above and follow the further instructions there. If you have an username and password you can
                    login to your profile page. If you don't have a username and password then register first if you
                    will.
                    For register click on the link "For a new account register here." into the login form.
                </p>
            </StyledCard>
            <StyledCard>
                <h4>Happy Cooking Today</h4>
            </StyledCard>
            <StyledCard>
                <p>
                    We wish you a lot of cooking fun today and enjoy your delicious meal!
                </p>
            </StyledCard>
        </>
    );
}

export default About;
