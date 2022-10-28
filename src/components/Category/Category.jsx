import React from 'react';
import {FaPizzaSlice, FaPepperHot} from "react-icons/fa";
import {GiForkKnifeSpoon, GiShrimp, GiGarlic, GiNoodles, GiChopsticks} from "react-icons/gi";
import {BsInfoLg} from "react-icons/bs";
import StyledList from "./List/ListCategory"
import StyledLink from "./Link/LinkCategory"

function Category() {
    return (
        <>
            <StyledList>
                <StyledLink to={"/"}>
                    <GiForkKnifeSpoon/>
                    <h4>Home</h4>
                </StyledLink>
                <StyledLink to={"/About"}>
                    <BsInfoLg/>
                    <h4>About</h4>
                </StyledLink>
                <StyledLink to={"/cuisine/Spanish"}>
                    <GiShrimp/>
                    <h4>Spanish</h4>
                </StyledLink>
                <StyledLink to={"/cuisine/French"}>
                    <GiGarlic/>
                    <h4>French</h4>
                </StyledLink>
                <StyledLink to={"/cuisine/Italian"}>
                    <FaPizzaSlice/>
                    <h4>Italian</h4>
                </StyledLink>
                <StyledLink to={"/cuisine/Indian"}>
                    <FaPepperHot/>
                    <h4>Indian</h4>
                </StyledLink>
                <StyledLink to={"/cuisine/Thai"}>
                    <GiNoodles/>
                    <h4>Thai</h4>
                </StyledLink>
                <StyledLink to={"/cuisine/Chinese"}>
                    <GiChopsticks/>
                    <h4>Chinese</h4>
                </StyledLink>

            </StyledList>
        </>
    );
}

export default Category;
