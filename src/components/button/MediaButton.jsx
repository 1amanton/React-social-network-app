import React from 'react';
import classes from "./MediaButton.module.css";

const MediaButton = (props) => {
    return (

        <button className={classes.btn}>{props.title}</button>

    );
};

export default MediaButton;