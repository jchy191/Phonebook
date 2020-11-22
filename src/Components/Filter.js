import React from 'react';


function Filter({searchValue, handleChange}) {
    return (
        <form>
            <div>Filter contacts: <input name="search" value={searchValue} onChange={handleChange}/></div>
        </form>
    );
}

export default Filter;