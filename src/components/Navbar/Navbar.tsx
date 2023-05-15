import React from "react";
import {NavbarContainer, NavbarTitle} from "./Navbar-styled";

const Navbar = () => {
    return (
        <NavbarContainer id="navbar" data-testid="navbar">
            <div>
                <NavbarTitle>PLANNER</NavbarTitle>
            </div>
        </NavbarContainer>
    )
}

export default Navbar