import './App.css';
import React, { useState } from 'react'
import Contact from './Components/Contact';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleChange = (event) => {
    switch(event.target.name) {
      case "name" : setNewName(event.target.value); break;
      case "number": setNewNumber(event.target.value); break;
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
      <form onSubmit={addPerson}>
        <div>Name: <input name="name" value={newName} onChange={handleChange}/></div>
        <div>Number: <input name="number" value={newNumber} onChange={handleChange}/></div>
        <div><button type="submit">Add</button></div>
      </form>
      <h2>Numbers</h2>

      <ul>{persons.map(person => <Contact key={person.id} name={person.name} number={person.number}/>)}</ul>
    </div>
  )
}

export default App