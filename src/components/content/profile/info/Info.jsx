import React from 'react';
import classes from "./Info.module.css";

const Info = () => {
    return (
        <div className={classes.info}>
            <div className={classes.username}>Anton Litvinenko</div>
            <div>Birth date: 26.06.1990</div>
            <div>City: SPB</div>
            <div>Education: Geek Brains</div>
            <div>Website: <a href="https://github.com/1amanton" target="_blank" rel="noreferrer">@1amanton</a></div>
        </div>
    );
};

export default Info;