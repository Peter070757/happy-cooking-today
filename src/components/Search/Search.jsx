import React from "react";
import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import StyledForm from "./Form/FormSearch";

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    };

    return (
        <StyledForm onSubmit={submitHandler}>
            <div>
                <FaSearch/>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Search for your recipe here."
                    value={input}
                />
            </div>
        </StyledForm>
    );
}

export default Search;
