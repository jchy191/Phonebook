import React from 'react';

function Contact({name, number}) {
    return (
        <li>{name} {number}</li>
    );
}

export default Contact;