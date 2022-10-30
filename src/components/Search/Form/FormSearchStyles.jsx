import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0 20rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    border: 1px solid orangered;
    outline: none;
    width: 100%;
  }

  input::placeholder {
    color: lightgray;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;

