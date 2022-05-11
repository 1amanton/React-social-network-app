import React from 'react';
import MsgItem from "./MsgItem";

const MsgList = () => {

    const msgData = [
        {id: 1, text: "Hi, how are u?"},
        {id: 2, text: "Whats up"},
        {id: 3, text: "Hello"},
    ]

    const list = msgData.map(msg => <MsgItem message={msg.text} key={msg.id} />)

    return (
        <div>
            {list}
        </div>
    );
};

export default MsgList;