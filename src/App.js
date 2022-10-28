import Pages from "./pages/Pages";
import Category from "./components/Category/Category";
import Search from "./components/Search/Search";

import {GiForkKnifeSpoon} from "react-icons/gi";
import StyledLogo from "./application/Logo/LogoApp";
import StyledNav from "./application/Navigation/NavApp";


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


        </div>
    );
}

export default App;
