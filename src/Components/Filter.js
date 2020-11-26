import React from 'react';
import PropTypes from 'prop-types';

Filter.propTypes = {
	searchValue: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

function Filter({searchValue, handleChange}) {
	return (
		<form>
			<div>Filter contacts: <input name="search" value={searchValue} onChange={handleChange}/></div>
		</form>
	);
}

export default Filter;