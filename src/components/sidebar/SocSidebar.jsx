import React from 'react';
import classes from "./SocSidebar.module.css";

const SocSidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={`${classes.item} ${classes.active}`}>
                Profile
            </div>
            <div className={classes.item}>
                Messages
            </div>
            <div className={classes.item}>
                News
            </div>
            <div className={classes.item}>
                Music
            </div>
        </div>
    );
};

export default SocSidebar;