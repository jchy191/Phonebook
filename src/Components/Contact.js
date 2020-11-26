import React from 'react';
import PropTypes from 'prop-types';

Contact.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

function Contact({name, id, number, handleDelete}) {
	return (
		<li>{name} {number} <button onClick={handleDelete} name={`${name}`} id={`${id}`}>Delete?</button></li>
	);
}

export default Contact;