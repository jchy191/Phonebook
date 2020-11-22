import React from 'react';

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