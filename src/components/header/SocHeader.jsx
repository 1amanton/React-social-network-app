import React from 'react';
import classes from "./SocHeader.module.css";
import Logo from "../../assets/logo.png"

const SocHeader = () => {
    return (
        <div className={classes.nav}>

            <div>
                <img src={Logo} alt=""/>
            </div>

            <ul className={classes.list}>
                <li>
                    <a href="#a">Account</a>
                </li>
                <li>
                    <a href="#a">Settings</a>
                </li>
            </ul>

        </div>
    );
};

export default SocHeader;