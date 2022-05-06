import React from 'react';
import classes from "./Wall.module.css";
import PostList from "./PostList";
import NewPost from "./NewPost";

const Wall = () => {
    return (
        <div className={classes.wall}>
            <h2>My Posts</h2>
            <NewPost/>
            <PostList/>
        </div>
    );
};

export default Wall;