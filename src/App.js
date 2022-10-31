import Pages from "./pages/Pages";
import Category from "./components/Category/Category";
import Search from "./components/Search/Search";
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

export default App;

