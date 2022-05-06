import React from 'react';
import MediaButton from "../../../button/MediaButton";
import classes from "./NewPost.module.css";

const NewPost = () => {
    return (
        <div>
            <textarea className={classes.text} name="" id=""  placeholder="Whats new?"></textarea>
            <div  className={classes.btn__right}>
                <MediaButton title="CREATE NEW POST"/>
            </div>

        </div>
    );
};

export default NewPost;