import React from 'react';
import Contact from './Contact';

function Contacts({persons, searchValue}) {
  console.log(persons);
  
  const personsToShow = persons.filter(person => new RegExp(`^${searchValue}`, 'i').test(person.name))
  .sort((a, b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })

    return (
        <ul>{personsToShow.map(person => <Contact key={person.id} name={person.name} number={person.number}/>)}</ul>
    );
}

export default Contacts;