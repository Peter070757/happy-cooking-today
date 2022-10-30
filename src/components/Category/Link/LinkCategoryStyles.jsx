import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const StyledLink = styled(NavLink)`
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

    h4 {
      color: white;
    }
  }
`;
