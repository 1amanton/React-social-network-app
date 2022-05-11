import React from 'react';
import classes from "./SocSidebar.module.css";
import {NavLink} from "react-router-dom";

const SocSidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.item}>
                <NavLink to="/">Profile</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/news">News</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/music">Music</NavLink>
            </div>


        </div>
    );
};

export default SocSidebar;