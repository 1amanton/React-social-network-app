import React from 'react';
import classes from "./PostItem.module.css";

const PostItem = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.user}>
                <div>
                    <img className={classes.avatar} src="https://avatars.mds.yandex.net/i?id=d93147937aedd8b213dff5c48706278d-5611890-images-thumbs&ref=rim&n=33&w=150&h=150" alt=""/>
                </div>
                <div className={classes.author}>
                    <div>UserName</div>
                    <div>Date</div>
                </div>
            </div>

            <div className={classes.post}>

                <div className={classes.text}>{props.text}</div>

                <div className={classes.btns}>
                    <div className={classes.btn}>
                        <div className={classes.icon}>Repost</div>
                        <div className={classes.counter}>{props.repost}</div>
                    </div>

                    <div className={classes.btn}>
                        <div className={classes.icon}>Like</div>
                        <div className={classes.counter}>{props.like}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;