import React from 'react';
import PostItem from "./PostItem";
import classes from "./PostList.module.css";

const PostList = () => {

    const postsData = [
        {id: 1, text: "Hi, how are u", like: 8, repost: 11},
        {id: 2, text: "I'm learning React!", like: 89, repost: 45},
        {id: 3, text: "What a great social network", like: 24, repost: 7}
    ]

    let todayDate = new Date().toLocaleDateString()

    const list = postsData.map(post => <PostItem text={post.text} like={post.like} repost={post.repost} date={todayDate} key={post.id}/>)

    return (
        <div className={classes.list}>

            {list}

        </div>
    );
};

export default PostList;