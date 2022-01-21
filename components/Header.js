import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import NavLink from "@material-tailwind/react/NavLink";

import Button from "@material-tailwind/react/Button";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

BsFillSunFill;
export default function Header({ setDarkTheme, darkTheme }) {
    const [openNavbar, setOpenNavbar] = useState(false);
    return (
        <>
            <Navbar className={`bg-black`} navbar>
                <NavbarContainer>
                    <NavbarWrapper>
                        <NavbarBrand>Navbar</NavbarBrand>
                        <NavbarToggler
                            color="white"
                            onClick={() => setOpenNavbar(!openNavbar)}
                            ripple="light"
                        />
                    </NavbarWrapper>

                    <NavbarCollapse open={openNavbar}>
                        <Nav>
                            <NavItem active="light" ripple="light">
                                {/* <Icon name="language" size="xl" /> */}
                                Discover
                            </NavItem>
                            <NavLink href="#navbar" ripple="light">
                                {/* <Icon name="account_circle" size="xl" /> */}
                                Profile
                            </NavLink>
                            <NavItem ripple="light">
                                {/* <Icon name="settings" size="xl" /> */}
                                Settings
                            </NavItem>
                        </Nav>
                    </NavbarCollapse>
                </NavbarContainer>
                <div>
                    <Button
                        type="submit"
                        className="dark:bg-white dark:text-black bg-black text-white"
                        onClick={(e) => setDarkTheme(!darkTheme)}
                        buttonType="filled"
                        rounded={true}
                        block={false}
                        iconOnly={true}
                        ripple="light"
                    >
                        {darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}

                        {/* {darkTheme ? "Light" : "Dark"} */}
                    </Button>
                </div>
            </Navbar>
        </>
    );
}
