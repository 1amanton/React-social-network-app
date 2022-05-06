import React from 'react';
import classes from "./SocProfile.module.css";
import ProfileHead from "./header/ProfileHead";
import ProfileInfo from "./info/ProfileInfo";
import Wall from "./posts/Wall";

const SocProfile = () => {
    return (
        <div className={classes.content}>
            <ProfileHead/>
            <div className={classes.bottom}>
                <ProfileInfo/>
                <Wall/>
            </div>
        </div>
    );
};

export default SocProfile;