import React from 'react';
import PropTypes from 'prop-types';

PersonForm.propTypes = {
	newName: PropTypes.string.isRequired,
	newNumber: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	addPerson: PropTypes.func.isRequired,
};

function PersonForm({newName, newNumber, handleChange, addPerson}) {
	return (
		<form onSubmit={addPerson}>
			<div>Name: <input name="name" value={newName} onChange={handleChange}/></div>
			<div>Number: <input name="number" value={newNumber} onChange={handleChange}/></div>
			<div><button type="submit">Add</button></div>
		</form>
	);
}

export default PersonForm;