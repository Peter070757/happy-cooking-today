import styled from "styled-components";

export const StyledCard = styled.div`
  min-height: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    border: 2px solid orangered;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: relative;
    z-index: 10;
    left: 36%;
    //bottom: 0;
    transform: translate(-32%, 0%);
    color: white;
    width: 70%;
    text-align: left;
    font-weight: 400;
    font-size: 1rem;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  h4 {
    text-align: left;
    padding: 1rem;
    color: #b63607;
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0;
    transform: translate(12%, 0%);
  }

  .navLink {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }

  a {
    color: #ea6534;
    text-decoration: none;
  }

  a:hover {
    color: #b63607;
  }

`;
