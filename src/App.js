import './App.css';
import React, { useState } from 'react'
import Contact from './Components/Contact';
import PersonForm from './Components/PersonForm';
import Filter from './Components/Filter';
import Contacts from './Components/Contacts';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchValue, setSearchValue ] = useState('')

  const handleChange = (event) => {
    switch(event.target.name) {
      case "name" : setNewName(event.target.value); break;
      case "number": setNewNumber(event.target.value); break;
      case "search": setSearchValue(event.target.value); break;
      default: break;
    }
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook!`)
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons([...persons, newPerson]);
    setNewName('');
    setNewNumber('');
  }



  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Add a New Contact:</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleChange={handleChange} addPerson={addPerson}/>
      
      <h2>Numbers</h2>
      <Filter handleChange={handleChange} searchValue={searchValue}/>
      <Contacts persons={persons} searchValue={searchValue}/>
    </div>
  )
}

export default App