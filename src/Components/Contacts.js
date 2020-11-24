import React from 'react';
import Contact from './Contact';

function Contacts({persons, searchValue, handleDelete}) {

  const personsToShow = persons.filter(person => new RegExp(`^${searchValue}`, 'i').test(person.name))
    .sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    })
  
    return (
        <ul>{personsToShow.map(person => <Contact key={person.id} id={person.id} name={person.name} number={person.number} handleDelete={handleDelete}/>)}</ul>    
    );
}

export default Contacts;