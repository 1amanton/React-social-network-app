import React from 'react';
import PostItem from "./PostItem";
import classes from "./PostList.module.css";

const PostList = () => {
    return (
        <div className={classes.list}>
            <PostItem text="Hi, how are u?" like="8" repost="11"/>
            <PostItem text="I'm learning React!" like="99" repost="45"/>
            <PostItem text="What a great social network" like="50" repost="7"/>


        </div>
    );
};

export default PostList;