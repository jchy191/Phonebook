import React from 'react';

function Contact({name, id, number, handleDelete}) {
    return (
        <li>{name} {number} <button onClick={handleDelete} name={`${name}`} id={`${id}`}>Delete?</button></li>
    );
}

export default Contact;