import React from 'react';
import StyledCard from "./CardLogin/CardLogin";
import {Link} from "react-router-dom";

function Login() {
    return (
        <>
            <StyledCard>
                <h4>Login here!</h4>
            </StyledCard>
            <StyledCard>
                <p>For more facilities login or register here.</p>
            </StyledCard>

            <StyledCard>
                <h4>Cuisine from different countries</h4>
            </StyledCard>
            <StyledCard>
                <p>
                    On our site we give you several cuisine recipes from different countries. Get
                    <Link className='navLink' to="/cuisine/italian">Italian recipes,</Link>
                    <Link className='navLink' to="/cuisine/chinese"> Chinese recipes,</Link>
                </p>
            </StyledCard>
            <StyledCard>
                <h4>Cuisine from different countries</h4>
            </StyledCard>
            <StyledCard>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aut corporis dignissimos
                    eveniet ex fugiat hic necessitatibus nostrum officia perspiciatis provident quae, qui, ullam veniam.
                    Ad at dolorem facere ipsa molestias necessitatibus placeat quidem quod sunt vel. Aspernatur at
                    distinctio ex incidunt laborum nemo possimus tenetur? Alias aut doloremque error et in libero non
                    quisquam temporibus ut voluptatum! Amet eligendi minima sed similique? Architecto consectetur fugiat
                    laborum libero maiores pariatur, quod? A asperiores aut blanditiis corporis dolor dolorem ex
                    exercitationem fugit in inventore iusto laborum magni maxime nulla numquam placeat quaerat quas
                    quisquam quos sunt tenetur, voluptate voluptatem voluptatibus.
                </p>
            </StyledCard>

        </>
    );
}

export default Login;
