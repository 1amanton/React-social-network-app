import React from 'react';
import DialogItem from "./DialogItem";

const DialogList = () => {

    const friendsData = [
        {id: 1, name: "Anton"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Dmitry"},
        {id: 4, name: "Andrew"},
        {id: 5, name: "Jan"},
    ]

    const list = friendsData.map(friend => <DialogItem name={friend.name} id={friend.id} key={friend.id}/>)

    return (
        <div>
            {list}
        </div>
    );
};

export default DialogList;