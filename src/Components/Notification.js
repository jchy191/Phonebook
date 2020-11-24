import React from 'react';

function Notification({message, isError}) {
    if (message === null) {
        return null
    }

    let messageType = "notification";

    if (isError) {
        messageType = "error";
    }
    
    return (
    <div className={`${messageType}`}>
        {message}
    </div>
    );
}

export default Notification;