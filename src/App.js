import Pages from "./pages/Pages";
import Category from "./components/Category/Category";
//import {Link, BrowserRouter} from 'react-router-dom';
//import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search/Search";
//import styled from "styled-components";
import {GiForkKnifeSpoon} from "react-icons/gi";
import StyledLogo from "./application/Logo/LogoApp";
import StyledNav from "./application/Navigation/NavApp";
import Footer from './pages/Footer';

function App() {
    return (
        <div className="App">

                <StyledNav>
                    <GiForkKnifeSpoon/>
                    <StyledLogo to={"/"}>Happy Cooking Today</StyledLogo>
                </StyledNav>
                <Search/>
                <Category/>
                <Pages/>
                <Footer/>

        </div>
    );
}
/*
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: 500;
  font-family: 'Dancing Script', sans-serif;
`;

const Nav = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-right: 5px;
    font-size: 2rem;
    color: #a93509;
  }
`;
*/
export default App;
