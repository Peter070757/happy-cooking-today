import React from 'react';
import {FaPizzaSlice, FaPepperHot} from "react-icons/fa";
import {GiForkKnifeSpoon, GiShrimp, GiGarlic, GiNoodles, GiChopsticks} from "react-icons/gi";
import {BsInfoLg} from "react-icons/bs";
import {FiLogIn} from "react-icons/fi";
import StyledList from "./List/ListCategory"
import StyledLink from "./Link/LinkCategory"
//import styled from "styled-components";
//import {NavLink} from "react-router-dom";

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
                <StyledLink to={"/Login"}>
                    <FiLogIn/>
                    <h4>Login</h4>
                </StyledLink>
            </StyledList>
        </>
    );
}

/*
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid orangered;
  border-radius: 1rem;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0.1rem;
  }

  svg {
    color: white;
    font-size: 2.3rem;
    margin-top: 0.7rem;
  }

  &.active {
    background: linear-gradient(to right, #672b05, #590612);

    svg {
      //color: white;
    }

    h4 {
      color: white;
    }
  }
`;
*/
export default Category;
