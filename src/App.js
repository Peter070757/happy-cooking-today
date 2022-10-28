import Pages from "./pages/Pages";

import {GiForkKnifeSpoon} from "react-icons/gi";
import StyledLogo from "./application/Logo/LogoApp";
import StyledNav from "./application/Navigation/NavApp";
//import Footer from './pages/Footer';

function App() {
    return (
        <div className="App">

            <StyledNav>
                <GiForkKnifeSpoon/>
                <StyledLogo to={"/"}>Happy Cooking Today</StyledLogo>
            </StyledNav>

            <Pages/>


        </div>
    );
}

export default App;
