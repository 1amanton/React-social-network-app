import React from 'react';
import classes from "./ProfileInfo.module.css";
import ProfileAvatar from "./ProfileAvatar";
import Info from "./Info";


const ProfileInfo = () => {
    return (
        <div className={classes.profile}>
            <ProfileAvatar/>
            <Info/>
            
        </div>
    );
};

export default ProfileInfo;