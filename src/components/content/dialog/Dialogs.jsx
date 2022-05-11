import React from 'react';
import classes from "./Dialogs.module.css";
import MsgList from "./MsgList";
import DialogList from "./DialogList";

const Dialogs = () => {

    return (
        <div className={classes.wrapper}>
            <div className="dialog">
                <DialogList />
            </div>

            <div className="messages">
               <MsgList />
            </div>
        </div>
    );
};

export default Dialogs;