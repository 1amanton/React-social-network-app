import React from 'react';
import classes from "./ProfileAvatar.module.css";

const ProfileAvatar = () => {
    return (
        <div>
            <img className={classes.avatar} src="https://avatarfiles.alphacoders.com/230/230948.jpg" alt=""/>
        </div>
    );
};

export default ProfileAvatar;