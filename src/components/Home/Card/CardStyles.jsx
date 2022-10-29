import styled from "styled-components";

export const StyledCard = styled.div`
 min-height: 18rem;
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
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
 }
` ;

